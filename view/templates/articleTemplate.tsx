/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Article from '~/model/article/article'
import Anchor from '~/view/components/atoms/articles/Anchor/Anchor'
import H1 from '~/view/components/atoms/articles/H1/H1'
import H2 from '~/view/components/atoms/articles/H2/H2'
import { Ol, Ul, UlLi } from '~/view/components/atoms/articles/List/List'
import ArticleOutline from '~/view/components/organizms/ArticleOutline/ArticleOutline'
import Theme from '~/view/theme/theme'
import MDX from '@mdx-js/runtime'
import gemoji from 'remark-gemoji'
import containers from 'remark-containers'
import html from 'remark-html'
import codeBlocks from 'remark-code-blocks'
import plugin from '~/remark-plugin/greybox'
import GreyBox from '../components/atoms/articles/GreyBox/GreyBox'
import Details from '../components/atoms/articles/Details/Details'
import {
  InfoMessage,
  TipMessage,
  WarnMessage,
  AlertMessage
} from '../components/atoms/articles/Message/Message'
import markerPlugin from '~/remark-plugin/marker'
import Marker from '../components/atoms/articles/Marker/Marker'
import Code from '../components/atoms/articles/Code/Code'

type Props = {
  article: Article
}

const components = {
  h1: H1,
  h2: H2,
  ul: Ul,
  ol: Ol,
  li: UlLi,
  a: Anchor,
  code: Code,
  inlineCode: H2,
  info: InfoMessage,
  tip: TipMessage,
  warn: WarnMessage,
  alert: AlertMessage,
  container2: H1,
  box: GreyBox,
  details: Details,
  remarkMarker: Marker
}

const ArticleTemplate: React.FC<Props> = ({ article }) => {
  return (
    <div css={pageOuterStyle} role="document">
      <div css={catchImage}>
        <h1 css={titleStyle}>{article.title}</h1>
        <div css={infoStyle}>
          <p>Create {article.createdAt.toFormat('yyyy/MM/dd')}</p>
          <p>Update {article.updatedAt.toFormat('yyyy/MM/dd')}</p>
        </div>
      </div>
      <p css={hsStyle}>{article.hs}</p>
      <aside css={sidebarStyle}>
        <ArticleOutline css={outlineBoxStyle} />
      </aside>
      <section css={articleStyle}>
        <MDX
          components={components}
          remarkPlugins={[
            gemoji,
            containers,
            // highlight,
            html,
            plugin,
            codeBlocks,
            markerPlugin
          ]}
        >
          {article.body}
        </MDX>
      </section>
    </div>
  )
}

const pageOuterStyle = (theme: Theme) => css`
  display: grid;
  grid-template:
    'catch_image  catch_image    catch_image'
    '...........  catch_message  ...........'
    'sidebar      article        ...........'
    / minmax(0, 1fr) minmax(auto, ${theme.articleWidth}) minmax(0, 1fr);
  min-height: 100vh;
`

const catchImage = (theme: Theme) => css`
  grid-area: catch_image;
  background: linear-gradient(
    45deg,
    ${theme.color.primary},
    #c779d0,
    ${theme.color.accent}
  );
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;

  height: 300px;
  color: white;
`

const titleStyle = (theme: Theme) => css`
  grid-row: 2;
`

const infoStyle = (theme: Theme) => css`
  grid-row: 3;
  margin: 0;
  text-align: center;
`

const hsStyle = (theme: Theme) => css`
  grid-area: catch_message;
  text-align: center;
  margin: 6em 0;
`

const sidebarStyle = (theme: Theme) => css`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const outlineBoxStyle = (theme: Theme) => css`
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 300px;
`

const articleStyle = (theme: Theme) => css`
  grid-area: article;
  max-width: ${theme.articleWidth};
  margin-bottom: 4rem;
  padding: 50px ${theme.articleMargin};

  background: white;
  border-radius: 7px;

  color: ${theme.color.text};
  line-height: 1.9;
  letter-spacing: 0.075em;

  img {
    max-width: 100%;
  }
`

export default ArticleTemplate
