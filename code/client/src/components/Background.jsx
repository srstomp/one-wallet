import React, { useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { gsap, Sine } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { useMounted } from '../utils/hooks'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    #top {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 0;
    }
    
    #bottom {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 0;
    }
    
    svg g path {
        visibility: hidden;
    }

    #turve, #burve {
        visibility: visible;
    }
`

gsap.registerPlugin(MorphSVGPlugin)

const Background = () => {
  const mounted = useMounted()
  const topCurve = useRef()
  const bottomCurve = useRef()
  let topPaths = []
  let bottomPaths = []

  const TOP = 0
  const BOTTOM = 1

  const next = (current, paths) => {
    const n = paths[Math.floor(Math.random() * paths.length)]
    return n === current ? next(current, paths) : n
  }

  const morph = (to, type, duration) => {
    const obj = type === TOP ? topPaths[0] : bottomPaths[0]
    const paths = type === TOP ? topPaths : bottomPaths
    const path = next(to === null ? obj : to, paths)

    gsap.to(obj, {
      duration: duration,
      morphSVG: path,
      ease: Sine.easeInOut,
      onComplete: () => morph(path, type, duration)
    })
  }

  const animate = useCallback(() => {
    if (mounted.current) {
      const t = topCurve.current.getElementsByTagName('g')// document.getElementById('topCurve').getElementsByTagName('g');
      const b = bottomCurve.current.getElementsByTagName('g')// document.getElementById('bottomCurve').getElementsByTagName('g');

      topPaths = Array.from(t[0].children)
      bottomPaths = Array.from(b[0].children)

      morph(null, TOP, 8)
      morph(null, BOTTOM, 14)
    }
  }, [mounted])

  useEffect(() => {
    animate()
  }, [animate])

  return (
    <Container>
      <svg ref={topCurve} id='top' width='85%' viewBox='0 0 1386 809' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
        <defs>
          <linearGradient x1='91.2477594%' y1='109.630409%' x2='47.2312248%' y2='-5.20019531%' id='linearGradientTop'>
            <stop stopColor='#00B2B6' offset='0%' />
            <stop stopColor='#00B2B6' offset='30%' />
            <stop stopColor='#60CED6' offset='100%' />
          </linearGradient>
        </defs>
        <g stroke='none' strokeWidth='1' fill='url(#linearGradientTop)'>
          <path
            d='M0,-7.10542736e-15 L0,808.298134 C41.5501377,596.65785 138.027016,451.239437
                289.430635,372.042894 C516.536062,253.248081 796.682139,431.137599 1075.43222,293.503989
                C1242.31209,211.106598 1333.75851,113.271936 1349.77146,-7.10542736e-15 L0,-7.10542736e-15 Z' id='turve'
          />
          <path
            d='M0,-7.10542736e-15 L0,635.301717 C41.5501377,538.992378 138.027016,451.239437
                289.430635,372.042894 C516.536062,253.248081 833.157926,335.625398 967.912196,268.924523
                C1086.18232,210.382994 1170.82277,120.741486 1221.83353,-7.10542736e-15 L0,-7.10542736e-15 Z'
            id='turveB'
          />
          <path
            d='M0,-7.10542736e-15 L0,724.619723 C64.2413934,549.661587
                156.962383,426.165017 278.162969,354.130013 C440.589051,258.226411
                582.471561,219.866163 870.420535,176.318841 C1077.60865,144.985207
                1228.46848,86.2122601 1323,-7.10542736e-15 L0,-7.10542736e-15 Z'
            id='turveC'
          />
          <path
            d='M0,0 L0,724.619723 C129.997614,725.443679 255.596714,689.838156 376.7973,617.803152
                C539.223382,521.89955 633.453092,282.490662 921.402067,238.94334 C1128.59019,207.609706
                 1259.02308,127.961926 1312.70074,0 L0,0 Z' id='turveD'
          />
          <path
            d='M1.13686838e-13,0 L1.13686838e-13,391.866047 C83.6901267,515.1376
                    194.774858,538.204868 333.254194,461.067849 C495.680276,365.164248 621.676926,226.560038
                    930.092228,208.996361 C1134.96894,197.329015 1286.99471,127.663561 1386.16952,0
                    L1.13686838e-13,0 Z' id='turveE'
          />
        </g>
      </svg>

      <svg
        ref={bottomCurve} id='bottom' width='50%' viewBox='0 0 476 355' version='1.1'
        xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <defs>
          <linearGradient
            x1='91.2477594%' y1='109.630409%' x2='47.2312248%' y2='-5.20019531%'
            id='linearGradientBottom'
          >
            {/* <stop stopColor='#00B2B6' offset='0%'></stop> */}
            {/* <stop stopColor='#00B2B6' offset='30%'></stop> */}
            {/* <stop stopColor='#7AD6DF' offset='100%'></stop> */}

            <stop stopColor='#7AD6DF' offset='0%' />
            <stop stopColor='#00B2B6' offset='100%' />
          </linearGradient>
        </defs>
        <g stroke='none' fill='url(#linearGradientBottom)'>
          <path
            d='M476,0 L476,354.28987 L0,354.28987 C81.8838887,292.195705 177.553041,255.671179
                287.007457,244.71629 C396.461874,233.761402 459.459388,152.189305 476,0 Z' id='burve'
          />
          <path
            d='M476,87.1521792 L476,354.28987 L89.3091831,354.28987 C192.110888,323.970555
                 272.092813,290.989344 329.254957,255.346234 C386.4171,219.703124 435.332115,163.638439
                 476,87.1521792 Z' id='burveB'
          />
          <path
            d='M477,0 L477,354.28987 L1,354.289578 C-2.63493441,184.745511 53.7360181,109.496514
                170.112857,128.542588 C230.38971,138.407415 285.244235,65.4686934 339.057704,32.7343467
                C374.933351,10.9114489 420.914116,0 477,0 Z' id='burveC'
          />
          <path
            d='M476,177.144935 L476,354.28987 L0,354.28987 C6.8090056,264.286318 63.1799581,189.037224
                    169.112857,128.542588 C275.045757,68.0479519 377.341471,84.2487342 476,177.144935 Z'
            id='burveD'
          />
          <path
            d='M476,230.169143 L476,354.289856 L103.361949,354.289856 C28.6213597,339.597538
                7.08700028,302.395738 38.7588705,242.684456 C67.2646522,188.942231 43.8315977,76.8331394
                196.304571,52.7857616 C370.036004,25.3855915 463.267813,84.5133853 476,230.169143 Z'
            id='burveE'
          />
        </g>
      </svg>
    </Container>
  )
}

export default Background
