import styled, { css } from 'styled-components'

const FontStyling = css`
  color: ${props => props.color || props.theme.palette.neutral20};
  margin: ${props => props.margin || '0'};
`

const Title1 = styled.h1`
  ${props => props.theme.fontStyle.large};
  ${FontStyling}
  -webkit-hyphens: auto;
  hyphens: auto;
  margin-bottom: 18px;
`

const Span = styled.span`
  ${props => props.theme.fontStyle.body};
  ${FontStyling}
`

const Paragraph = styled.p`
  ${props => props.theme.fontStyle.body};
  ${FontStyling}
  white-space: pre-wrap;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export {
  Title1,
  Span,
  Paragraph,
  Row,
  Column
}
