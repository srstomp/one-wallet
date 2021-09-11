import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Alert from './Alert'
import { breakpoints } from '../../utils/helper'
import { Button } from '../buttons'

const ModalBody = styled.p`
    margin: 0px 0 32px;
    line-height: 1.5;
`

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex-wrap: wrap-reverse;

    @media ${breakpoints.tablet} {
        justify-content: flex-end;
    }
`

const Spacer = styled.div`
    width: 20px;
    height: 20px;
`

const AlertConfirm = ({title, body, hide, confirm, cancelLabel, confirmLabel, buttonColorConfirm = Button.styles.PRIMARY}) => {

    const onSelect = () => {
        confirm()
        hide()
    }

    return (
        <Alert
            title={title}
            closeHandler={hide}
            showCloseButton>
            <ModalBody>{body}</ModalBody>
            <Layout>
                <Button
                    label={cancelLabel || "Annuleren"}
                    onClick={() => hide()}
                    color={Button.styles.SECONDARY}
                    margin={5}
                />
                <Spacer/>
                <Button
                    label={confirmLabel || "Ok"}
                    onClick={() => onSelect()}
                    color={buttonColorConfirm}
                    margin="5px 0"
                />
            </Layout>
        </Alert>
    )
}

export default AlertConfirm

AlertConfirm.defaultProps = {
    confirm: () => {}
}

AlertConfirm.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
    confirm: PropTypes.func,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string
}
