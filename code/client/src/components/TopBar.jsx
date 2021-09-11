import React from 'react'
import styled from 'styled-components'
import Icon from '../assets/svg/icon.svg'
import Munqs from '../assets/svg/munqs.svg'


const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 18px;
    width: 100%;
    height: 100%;
`

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 24px;
`

const TopBar = () => {
  return (
    <Container>
      {/*<Icon style={{ marginRight: '12px' }} />*/}
      <Munqs />
      <Menu>
        <span>Create</span>
        <span>Wallets</span>
      </Menu>
    </Container>
  )
}

export default TopBar
