import { css } from 'styled-components'

const palette = {
  primary100: '#00B2B6',
  primary50: '#7AD6DF',
  secondary100: '#6660A5',
  secondary50: '#877EDC',
  neutral0: '#111111',
  neutral20: '#303030',
  neutral40: '#454545',
  neutral60: '#7D7D7D',
  neutral80: '#BCBCBC',
  neutral100: '#ffffff',
  success: '#79C7A7',
  warning: '#F9C74E',
  error: '#FD6A8E',
  info: '#708DF2',
}

const getStyle = (font, size, lineHeight) =>
  css`
      font-family: ${font.name};
      font-size: ${size}rem;
      font-weight: ${font.weight};
      line-height: ${lineHeight}rem;
  `

const fonts = {
  Mulish: {
    name: 'Mulish',
    weight: 300
  },
  MulishExtraBold: {
    name: 'Mulish',
    weight: 800
  },
  CrimsonText: {
    name: 'Crimson Text',
    weight: 400
  },
  CrimsonTextSemiBold: {
    name: 'Crimson Text',
    weight: 600
  },
  WorkSans: {
    name: 'Work Sans',
    weight: 400
  },
  WorkSansBold: {
    name: 'Work Sans',
    weight: 700
  }
}

const fontStyle = {
  large:      getStyle(fonts.CrimsonTextSemiBold, 60 / 16, 50 / 16),
  title1:     getStyle(fonts.CrimsonText, 42 / 16, 40 / 16),
  title2:     getStyle(fonts.CrimsonText, 20 / 16, 20 / 16),
  title3:     getStyle(fonts.CrimsonText, 18 / 16, 18 / 16),
  headline:   getStyle(fonts.WorkSansBold, 18 / 16, 18 / 16),
  body:       getStyle(fonts.WorkSans, 14 / 16, 16 / 16),
  callout:    getStyle(fonts.WorkSans, 14 / 16, 16 / 16),
  subhead:    getStyle(fonts.WorkSans, 13 / 16, 15 / 16),
  footnote:   getStyle(fonts.WorkSans, 12 / 16, 14 / 16),
  caption1:   getStyle(fonts.WorkSansBold, 11 / 16, 13 / 16),
  caption2:   getStyle(fonts.WorkSans, 11 / 16, 13 / 16)
}

export const theme = {
  palette,
  fontStyle,
}
