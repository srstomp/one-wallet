import React, { useState, useContext } from 'react'
import config from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import walletActions from '../../state/modules/wallet/actions'
import _ from 'lodash'
import { ThemeContext } from 'styled-components'

const NetworkSelector = () => {
  const themeContext = useContext(ThemeContext)
  const networkId = useSelector(state => state.wallet.network)
  const networks = _.map(config.networks, item => ({ label: _.get(item, 'name'), value: item }))
  const [selectedOption, setSelectedOption] = useState(
    _.mapKeys(config.networks[networkId], (value, key) => key === 'name' ? 'label' : key))
  const dispatch = useDispatch()

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? themeContext.palette.neutral100 : themeContext.palette.secondary50,
      backgroundColor: state.isSelected ? themeContext.palette.secondary50 : themeContext.palette.neutral100,
      '&:hover': {
        backgroundColor: themeContext.palette.secondary10,
        color: themeContext.palette.neutral20
      }
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
      display: 'flex',
      cursor: 'pointer',
      backgroundColor: themeContext.palette.neutral100,
      opacity: 0.8,
      borderRadius: 6,
    }),
    dropdownIndicator: provided => ({
      ...provided,
      color: themeContext.palette.secondary50,
    }),
    menu: provided => ({
      ...provided,
      borderRadius: 6,
    }),
    menuList: provided => ({
      ...provided,
      // kill the white space on first and last option
      padding: 0,
      borderRadius: 6,
      border: 'none',
      overflow: 'hidden',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return { ...provided, opacity, transition }
    }
  }

  const onChange = (v) => {
    setSelectedOption(v)
    dispatch(walletActions.setNetwork(v))
  }

  return (
    <Select styles={customStyles} defaultValue={selectedOption} options={networks} onChange={onChange} />
  )
}

export default NetworkSelector
