import React from 'react'
import AuthCode from 'react-auth-code-input'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    
    .inputCode {
        width: 2ch;
        padding: 8px;
        border-radius: 8px;
        font-size: 40px;
        text-align: center;
        margin-right: 12px;
        border: 1px solid ${props => props.theme.palette.neutral60};
        text-transform: uppercase;
        ${props => props.theme.fontStyle.body};
        font-size: 2.75rem;
    }
`

const OTPInput = () => {
  return (
    <Container>
      <AuthCode
        characters={6}
        allowedCharacters="^[0-9]"
        onChange={() => null}
        containerClassName='container'
        inputClassName='inputCode'
      />
    </Container>
  )
}

export default OTPInput
