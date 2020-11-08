export default function plugin(opt = {}) {
  const { className } = Object.assign({ className: 'remark-container' }, opt)
  const parser = this.Parser
  const { blockTokenizers, blockMethods, interruptParagraph } = parser.prototype
  const paragraph = 'paragraph'

  function tokenizer(eat, value, silent) {
    const reg = /^\s*@@@\s*(\w+)(.*?)[\n\r]([\s\S]+?)\s*@@@\s*?/
    const match = value.match(reg)
    if (!match) {
      return false
    }
    if (silent) {
      return true
    }
    const input = match[0]
    const type = match[1]
    const title = match[2]
    const content = match[3]
    const start = eat.now()
    const add = eat(input)
    const end = eat.now()
    let children = [
      {
        type: paragraph,
        children: [
          {
            type: 'text',
            value: (title ?? type ?? '').trim()
          }
        ],
        data: { hProperties: { className: [`${className}-title`] } }
      }
    ]
    children = children.concat(this.tokenizeBlock(content?.trim() ?? '', {}))
    const result = add({
      type: 'container2',
      children,
      data: {
        hName: 'container2',
        hProperties: { className: [className, type?.toLowerCase() ?? ''] }
      },
      position: {
        start,
        end
      }
    })
    console.log(result)
    return result
  }
  tokenizer.notInList = true
  tokenizer.notInLink = true
  blockTokenizers.container2 = tokenizer
  blockMethods.splice(blockMethods.indexOf('newline') + 1, 0, 'container2')
  interruptParagraph.unshift(['container2'])
}
