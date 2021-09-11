import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Power3, gsap } from 'gsap'
import useLockBodyScroll from '../../utils/hooks/useLockBodyScroll'
import { breakpoints } from '../../utils/helper'
import { ReactComponent as CloseButton } from '../../assets/svg/close.svg'
import _ from 'lodash'

const Background = styled.div`
    background-color: rgba(19, 28, 78, 0.3);
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
`

const Wrapper = styled.div`
    flex-direction: column;
    width: ${props => props.fullscreen ? '100%' : '300px'};
    max-height: ${props => props.fullscreen ? '100%' : '75%'};
    border-radius: 0.5rem;
    color: ${props => props.theme.palette.neutral20};
    overflow: auto;
    background-color: ${props => props.backgroundColor ?? props.theme.palette.neutral100};
    outline: none;
    box-shadow: 2px 3px 30px 10px rgba(0,0,0,0.12);

    @media ${breakpoints.mobileS} {
        width: ${props => props.fullscreen ? '100%' : '340px'};
    }

    @media ${breakpoints.mobileL} {
        width: 480px;
    }
    
    @media ${breakpoints.tablet} { 
        max-height: 75%;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 24px 32px;
   // border-bottom: 1px solid ${props => props.theme.palette.neutral40};
    background-color: ${props => props.backgroundColor ?? props.theme.palette.primary50};
`

const Title = styled.h1`
    color: ${props => props.theme.palette.neutral20};
    ${props => props.theme.fontStyle.headline};
    width: 100%;
    margin-top: 6px;
`

const Body = styled.div`
    width: 100%;
    padding: 24px 32px 32px;
`

const Alert = ({ title, children, closeHandler,
                 showCloseButton = false,
                 fullscreenOnMobile = false,
                 backgroundColor
               }) => {
  const background = useRef(null)
  const modal = useRef(null)

  useLockBodyScroll()

  useLayoutEffect(() => {
    gsap.from(background.current, 0.5, {autoAlpha: 0, ease: Power3.easeInOut})
    // eslint-disable-next-line
  }, [])

  const transitionOut = () => {
    if (!_.isNull(background.current)) {
      gsap.to(background.current, 0.5, {
        autoAlpha: 0, ease: Power3.easeInOut,
        onComplete: () => {
          closeHandler()
        }
      })
    }
  }

  const onCloseClick = () => transitionOut()

  const onBackgroundClick = e => {
    if (modal.current.contains(e.target)) {
      return
    }
    transitionOut()
  }

  return (
    <>
      <Background onClick={onBackgroundClick} ref={background}>
        <Wrapper aria-modal aria-hidden tabIndex={-1} role="dialog" ref={modal} backgroundColor={backgroundColor}
                 fullscreen={fullscreenOnMobile}>
          {(title || showCloseButton) &&
          <Header showCloseButton={showCloseButton}>
            <Title>{title}</Title>
            {showCloseButton && <CloseButton onClose={onCloseClick}/>}
          </Header>}
          <Body>
            {children}
          </Body>
        </Wrapper>
      </Background>
    </>
  )
}

export default Alert

Alert.propTypes = {
  title: PropTypes.string,
  closeHandler: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  fullscreenOnMobile: PropTypes.bool,
  backgroundColor: PropTypes.string
}
