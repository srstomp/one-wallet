import React, { useEffect, useState } from 'react'
import { PageHeader, Select, Divider, Modal, Input, Typography, Space, Button } from 'antd'
import { useRouteMatch, useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import walletActions from '../state/modules/wallet/actions'
import { SearchOutlined, LockOutlined, CloseOutlined, SettingOutlined } from '@ant-design/icons'
import config from '../config'
import util, { useWindowDimensions } from '../util'
import { Hint } from '../components/Text'
const { Text, Link } = Typography

// const SelectorLabel = styled.span`
//   margin: 16px;
// `
const NetworkSelector = () => {
  const networkId = useSelector(state => state.wallet.network)
  const dispatch = useDispatch()
  const networks = config.networks
  const onChange = (v) => {
    dispatch(walletActions.setNetwork(v))
  }
  return (
    <>
      {/* <SelectorLabel>Network</SelectorLabel> */}
      <Select style={{ width: 200 }} bordered={false} value={networkId} onChange={onChange}>
        {Object.keys(networks).map(k => {
          return <Select.Option key={k} value={k}>{networks[k].name} </Select.Option>
        })}

      </Select>
    </>
  )
}

const RelayerSelector = () => {
  const relayer = useSelector(state => state.wallet.relayer)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const relayers = config.relayers
  const onChange = (v) => {
    dispatch(walletActions.setRelayer(v))
  }
  return (
    <>
      {/* <SelectorLabel>Relayer</SelectorLabel> */}
      <Select
        suffixIcon={<SearchOutlined />}
        style={{ width: 200 }} dropdownMatchSelectWidth bordered={false} showSearch onChange={onChange}
        value={relayer}
        onSearch={(v) => setInput(v)}
      >
        {Object.keys(relayers).map(k => {
          return <Select.Option key={k} value={k}>{relayers[k].name} </Select.Option>
        })}
        {input && <Select.Option key={input} value={input}>{input}</Select.Option>}
      </Select>
    </>
  )
}

const SecretSettings = ({ visible, onClose }) => {
  const dispatch = useDispatch()
  const relayerSecret = useSelector(state => state.wallet.relayerSecret)
  const [secret, setSecret] = useState(relayerSecret)
  const onSubmit = () => {
    dispatch(walletActions.setRelayerSecret(secret))
    onClose && onClose()
  }
  return (
    <Modal title='Relayer password' visible={visible} onOk={onSubmit} onCancel={onClose}>
      <Space direction='vertical'>
        <Text>If your relayer is password protected, provide it here</Text>
        <Input style={{ marginBottom: 24 }} value={secret} onChange={({ target: { value } }) => setSecret(value)} />
        <Text type='secondary'>What is a relayer?</Text>
        <Text type='secondary'>You need to pay for gas to do stuff on blockchain. Relayers are paying on your behalf. For testing, we are providing a relayer for free.</Text>
        <Text type='secondary'>You may also set up your own relayer using <Link target='_blank' href='https://github.com/polymorpher/one-wallet/tree/master/code/relayer' rel='noreferrer'>our code on Github</Link></Text>
      </Space>
    </Modal>
  )
}

const WalletHeader = () => {
  const { isMobile } = useWindowDimensions()
  const dev = useSelector(state => state.wallet.dev)
  const history = useHistory()
  const match = useRouteMatch('/:action/:address?')
  const { action, address: routeAddress } = match ? match.params : {}
  const oneAddress = routeAddress && util.safeOneAddress(routeAddress) || ''
  const address = routeAddress && util.safeNormalizedAddress(routeAddress) || ''
  const shortAddress = util.ellipsisAddress(oneAddress)
  const wallets = useSelector(state => state.wallet.wallets)
  const wallet = wallets[address] || {}
  const subtitle = wallet.name ? `${wallet.name} (${shortAddress})` : shortAddress
  const [settingsVisible, setSettingsVisible] = useState(false)
  const [relayerEditVisible, setRelayerEditVisible] = useState(false)
  return (
    <PageHeader
      style={{ background: '#ffffff', padding: isMobile ? 8 : undefined }}
      onBack={action && (() => history.goBack())}
      title={!isMobile && titleCase(action || '')}
      subTitle={!isMobile && <Hint>{subtitle}</Hint>}
      extra={[
        dev && <Button key='toggle' shape='circle' icon={relayerEditVisible ? <CloseOutlined /> : <SettingOutlined />} onClick={() => setRelayerEditVisible(!relayerEditVisible)} />,
        dev && relayerEditVisible &&
          <Space size='small' key='relayer'>
            <Button shape='circle' icon={<LockOutlined />} onClick={() => setSettingsVisible(true)} />
            <RelayerSelector />
            <Divider type='vertical' />
          </Space>,
        <NetworkSelector key='network' />,
        <SecretSettings key='settings' visible={settingsVisible} onClose={() => setSettingsVisible(false)} />
      ]}
    />
  )
}

export default WalletHeader
