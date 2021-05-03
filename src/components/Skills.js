import React, { useEffect, useState } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export default function Skills(props) {

  const { page } = props

  const [visible, setVisible] = useState(true)

  const { ref, inView, entry } = useInView({
    threshold: 0.4
  })

  useEffect(() => {
    if (inView) {
      setVisible(true)
      props.parentCallBack(1)
      document.title = "About | Luke Sutor"
    } else if (page === 0) {
      setVisible(false)
    }
  }, [inView, page])

  const languagesHTML = [
    <p>HTML</p>,
    <p>CSS</p>,
    <p>Javascript</p>,
    <p>React</p>,
    <p>Node</p>,
    <p>Python</p>
  ]

  // Trail for skills
  const [trail, setTrail] = useTrail(languagesHTML.length, () => ({ transform: 'scale(0)' }))

  // Update trail if in view
  if (visible) {
    setTrail({ transform: 'scale(1)', delay: 100 })
  } else {
    setTrail({ transform: 'scale(0)' })
  }

  const transition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)'
  })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1">
        <animated.p style={transition} className="pb-8 text-3xl md:text-4xl font-semibold">My Skills</animated.p>

        <div className="flex flex-col gap-4 text-base md:text-xl lg:text-2xl" >
          {trail.map((props, i) => <animated.div key={i} style={props} >{languagesHTML[i]}</animated.div>)}
        </div>
      </div>
    </div>
  )
}