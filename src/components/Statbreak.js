import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import statbreak from './images/statbreak.png'
import Github from './images/Github'
import Link from './images/Link'

export default function Statbreak(props) {

  const { page } = props

  const [visible, setVisible] = useState(false)

  const transition = useSpring({
    config: { mass: 1, tension: 20, friction: 10 },
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)'
  })

  const { ref, inView, entry } = useInView({
    threshold: 0.4
  })

  useEffect(() => {
    if (inView) {
      setVisible(true)
      props.parentCallBack(2)
      document.title = "Projects | Luke Sutor"
    } else if (page <= 1) {
      setVisible(false)
    }
  }, [inView, page])


  return (
    <animated.div ref={ref} style={transition} className="w-full h-full">
      <div className="image-container">
        <img src={statbreak} alt="" className="image"/>
        <div className="overlay">
          <div className="link-container">
            <a href="https://github.com/LukeSutor/React-Basketball-Site" target="_blank" rel="noreferrer" className="link mr-4"><Github /></a>
            <a href="https://statbreak.herokuapp.com" target="_blank" rel="noreferrer" className="link"><Link /></a>
          </div>
          <div className="info-container">
            <em className="info-label text-xl font-bold">i</em>
            <div className="info">
              <p className="text-xs md:text-xl text-justify">Statbreak is a social networking site for basketball 
              players to share stats from their best games. 
              Statbreak was created using the MERN stack, tailwindcss, and react-spring animations.</p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://statbreak.herokuapp.com" target="_blank" rel="noreferrer" className="text-2xl md:text-4xl font-semibold hover:text-gray-300">Statbreak</a>
      <p className="mt-2 text-base md:text-2xl lg:text-xl text-gray-400">Platform for sharing basketball stats.</p>
    </animated.div>
  );
}