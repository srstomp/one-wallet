import React, { useState } from 'react'
import config from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import walletActions from '../../state/modules/wallet/actions'
import _ from 'lodash'
import { SelectBox } from '../misc'

const NetworkSelector = () => {
  const networkId = useSelector(state => state.wallet.network)
  const networks = _.map(config.networks, item => ({ label: _.get(item, 'name'), value: item }))
  const [selectedOption, setSelectedOption] = useState(_.first(_.map(networks, item => _.get(item, 'name') === config.networks[networkId])))
    //_.mapKeys(config.networks[networkId], (value, key) => key === 'name' ? 'label' : key))
  const dispatch = useDispatch()

  const onChange = (v) => {
    setSelectedOption(v)
    dispatch(walletActions.setNetwork(v))
  }

  return (
    <SelectBox defaultValue={selectedOption} options={networks} onChange={onChange} />
  )
}

export default NetworkSelector
