import lightTheme from '../color/light/light_theme'
import ColorTheme from '../color/color_theme'
import Theme, { themeBuilder } from '../theme'

type TMRec<T> = {
  [P in keyof T]: T[P] extends { [key: string]: unknown }
    ? TMRec<T[P]>
    : ({ theme }: { theme: ColorTheme }) => T[P]
}
type TM = TMRec<Theme>

const replace = (obj: any, keys: string[]) => {
  if (typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        replace(value, [...keys, key])
      ])
    )
  } else {
    return ({ theme }: { theme: ColorTheme }) =>
      keys.reduce((acc, key) => acc[key], theme)
  }
}

const tm: TM = replace(themeBuilder('light') /* なんでもいい */, [])
export default tm
