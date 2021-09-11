import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Modal = ({ toggler, content, container }) => {
    // Automatically open the modal if `toggler` is undefined
    // TODO Maybe add a useModals that communicates to a ModalProvider
    const [ isOpen, setIsOpen ] = useState(!_.isFunction(toggler))
    const willPresent = () => setIsOpen(true)
    const willHide = () => setIsOpen(false)

    return (
        <>
            { toggler && toggler(willPresent, isOpen) }
            { isOpen && ReactDOM.createPortal(content(willHide), container) }
        </>
    )
}

export default Modal

Modal.propTypes = {
    toggler: PropTypes.func,
    content: PropTypes.func.isRequired,
    container: PropTypes.object.isRequired
}
