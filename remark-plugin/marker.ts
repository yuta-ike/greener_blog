export default function markerPlugin(opt = {}) {
  const { className } = Object.assign({ className: 'remark-container' }, opt)
  const parser = this.Parser

  const { inlineTokenizers, inlineMethods } = parser.prototype

  function locator(value, fromIndex) {
    return value.indexOf('-', fromIndex)
  }

  function tokenizer(eat, value, silent) {
    const reg = /^--(.+)--/
    const match = value.match(reg)
    if (!match) {
      return false
    }
    if (silent) {
      return true
    }

    const target = match[0]
    if (target == null || target === '') {
      return
    }

    const now = eat.now()
    now.offset += 2

    return eat(target)({
      type: 'remarkMarker',
      children: this.tokenizeInline(target.slice(2, target.length - 2), now),
      data: {
        hName: 'remarkMarker',
        hProperties: { className }
      }
    })
  }
  tokenizer.locator = locator
  inlineTokenizers.remarkMarker = tokenizer
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'remarkMarker')
}
