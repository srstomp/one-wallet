import React, { useCallback, useEffect, useState } from 'react'
import b32 from 'hi-base32'
import qrcode from 'qrcode'
// import ONEUtil from '../../../lib/util'
// import ONEConstants from '../../../lib/constants'
import ONENames from '../../../../lib/names'
import { useWindowDimensions, useMounted } from '../../utils/hooks'

const generateOtpSeed = () => {
  const otpSeedBuffer = new Uint8Array(20)
  return window.crypto.getRandomValues(otpSeedBuffer)
}

const genName = (existingNames) => {
  const name = `${ONENames.randomWord()} ${ONENames.randomWord()} ${ONENames.randomWord()}`
  return (existingNames && existingNames.includes(name)) ? genName() : name
}

const QR = () => {
  const { isMobile } = useWindowDimensions()
  const [wallets] = useState([])
  const mounted = useMounted()

  const generateNewOtpName = () => genName(Object.keys(wallets).map(k => wallets[k].name))

  const [qrCodeData, setQRCodeData] = useState()
  const [secondOtpQrCodeData, setSecondOtpQrCodeData] = useState()
  const [name, setName] = useState(generateNewOtpName())
  const [seed] = useState(generateOtpSeed())
  const [seed2] = useState(generateOtpSeed())

  const getQRCodeUri = (otpSeed, otpDisplayName) =>
    `otpauth://totp/${otpDisplayName}?secret=${b32.encode(otpSeed)}&issuer=Harmony`

  const fetchQR = useCallback(async () => {
    try {
      const otpUri = getQRCodeUri(seed, name)
      const otpQrCodeData = await qrcode.toDataURL(otpUri, {errorCorrectionLevel: 'low', width: isMobile ? 192 : 256})

      if (mounted.current) {
        setQRCodeData(otpQrCodeData)
      }
    } catch (err) {
      console.log(err)
    }
  }, [mounted])

  useEffect(() => {
    fetchQR()
  }, [name])

  return (
    <img src={qrCodeData} width={380} alt="qrcode" />
    // <Image src={qrCodeData} preview={false} width={isMobile ? 192 : 256} />
  )
}

export default QR
