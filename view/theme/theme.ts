import ColorTheme from './color/color_theme'
import lightTheme from './color/light/light_theme'

type Theme = {
  color: ColorTheme
  articleWidth: string
  articleMargin: string
}

type ColorMode = 'light' | 'dark'

const themeBuilder = (colorMode: ColorMode) => ({
  color: colorMode === 'light' ? lightTheme : lightTheme,
  articleWidth: '860px',
  articleMargin: '80px'
})

export default Theme
export { themeBuilder }
