import React from 'react'
import styled from 'styled-components'
import Icon from '../../assets/svg/icon.svg'
import Munqs from '../../assets/svg/munqs.svg'
import NetworkSelector from './NetworkSelector'

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
    flex: 1;
    width: 100%;
`

const Header = () => {
  return (
    <Container>
      {/*<Icon style={{ marginRight: '12px' }} />*/}
      <Munqs />
      <Menu>
        {/*<span>Create</span>*/}
        {/*<span>Wallets</span>*/}
      </Menu>
      <NetworkSelector />
    </Container>
  )
}

export default Header
