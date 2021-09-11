const size = {
  mobileS: '375px',
  mobileM: '414px',
  mobileL: '567px',
  tablet: '768px',
  desktop: '960px',
  large: '1280px'
}

const breakpoints = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  large: `(min-width: ${size.large})`
}

export {
  breakpoints,
}
