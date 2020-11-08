/** @jsx jsx */
import { jsx } from '@emotion/core'
import { DateTime } from 'luxon'
import Article from '~/model/article/article'
import ArticleTemplate from '~/view/templates/articleTemplate'
// import mdx from '@mdx-js/mdx'

const article = new Article(
  '001',
  'test',
  'フックセンテンス',
  'ブログのタイトル',
  `
# 見出し

## 箇条書き

+ 項目1
  + 項目1-1
  + 項目1-2
+ 項目2
+ 項目3 \`const x = 10;\`

## チェックリスト

* [ ] to do _underline_
* [x] done :+1:

## テーブル
| a | b  |  c |  d  |
| - | :- | -: | :-: |
| A | B  |  C |  D  |
| あ | い  |  う |  え  |

## インラインスタイル
* ~~two~~ _italic_ **strong** *what?*

## リンク
[リンク](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)

[Youtube](https://www.youtube.com/watch?v=WJzSBLCaKc8)

![ねこ](https://www.bs-tbs.co.jp/information/images/%E3%81%AD%E3%81%93%E8%87%AA%E6%85%A2HP1440X810.jpg?20200401)

## コードブロック
\`\`\`App.tsx
import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import Code from './Code'

export default {
  title: 'Code',
  component: Code
}

const x: number = 100;

const Code: React.FC<Props> = ({ className, children }) => {
  const language = className.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={(language as unknown) as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
export default Code
\`\`\`

## ルビ
｜禁書目録《インデックス》

## 数式

$$
e^{i\theta} = \\cos\theta + i\\sin\theta
$$

## 引用
> 引用文
> 引用文

## JSX
<div className="aaa">AAA</div>

## 水平線
---

## マーカー
ここに--マーカーを引く--ことができます。
You can draw --marker-- here!

## グレイボックス
::: box
### My Contaienr
content will be here
:::

## アコーディオン
::: details アコーディオンタイトル
具体的な内容はこちらに
具体的な内容はこちらに
具体的な内容はこちらに
具体的な内容はこちらに
:::

## 吹き出し
@:A := image_url
@:B := image_url

@:A|吹き出し
@:B|吹き出し

## メッセージ

::: tip
Container
:::

::: info
Container
:::

::: warn
Container
:::

::: alert
Container
:::

## OGP

## コメント
<!-- TODO: ◯◯について追記する -->

## 脚注
脚注の例[^1]です。インライン [^脚注の内容その2] で書くこともできます。

aaa

[^1]: 脚注の内容その1
[^脚注の内容その2]: aaa
  `,
  DateTime.local(),
  DateTime.local(),
  'テスト',
  ['テスト', 'サンプル']
)

type Props = {
  mdx: JSX.Element
}

const ArticlePage: React.FC<Props> = () => {
  // console.log(mdx(article.body))
  return <ArticleTemplate article={article} />
}

export default ArticlePage
