import styled from 'styled-components'
import { Paragraph, Row, Title1, Column } from '../components/UI'
import { OTPInput, QR } from '../components/create'
import { useTranslation } from 'react-i18next'
import React, { useRef } from 'react'
import Modal from '../components/misc/Modal'
import Alert from '../components/alert/Alert'
import { gsap } from 'gsap'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 80px);
`

const Panel = styled.div`
    width: 400px;
    height: 400px;
    background-color: ${props => props.theme.palette.neutral100};
    box-shadow: 2px 3px 30px 10px rgba(0,0,0,0.12);
    border-radius: 8px;    
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
`

const Inner = styled(Row)`
    align-items: center;
    width: 100%;
    max-width: 940px;
    justify-content: center;
`

const Link = styled.button`
    background-color: transparent;
    border: none;
    color: ${props => props.theme.palette.neutral20};
    ${props => props.theme.fontStyle.title2};
    cursor: pointer;
    
    &:hover {
        color: ${props => props.theme.palette.neutral0};
    }
`

const CodeWrapper = styled(Column)`
    width: 100%;
    max-width: 600px;
    align-items: center;
`

const Welcome = () => {
  const { t } = useTranslation()
  const panel = useRef()

  const toggle = () =>
    gsap.to(panel.current, { rotationY: 180, transformOrigin: 'center center' })

  return (
    <Container>
      <Inner>
        <Column style={{ marginRight: '36px' }}>
          <Panel ref={panel}>
            <QR />
          </Panel>
          {/*<Link onClick={() => toggle()}>{t('enter_code_link')}</Link>
          <Modal
            toggler={show => <Link onClick={show}>{t('enter_code_link')}</Link>}
            content={hide =>
              <Alert title={t('create_enter_code_title')} closeHandler={hide}>
                <CodeWrapper>
                  <Paragraph style={{ marginBottom: '24px' }}>{t('create_enter_code_body')}</Paragraph>
                  <OTPInput />
                </CodeWrapper>
              </Alert>}
            container={document.body}
          />*/}
        </Column>
        <Column>
          <Title1>{t('create_title')}</Title1>
          <Paragraph>{t('create_body')}</Paragraph>
        </Column>
      </Inner>
    </Container>
  )
}

export default Welcome
