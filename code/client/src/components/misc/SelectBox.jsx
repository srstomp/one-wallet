import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Select from 'react-select'

const SelectBox = () => {
  const themeContext = useContext(ThemeContext)

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

  return (
    <Select styles={customStyles} />
  )
}

export default SelectBox
