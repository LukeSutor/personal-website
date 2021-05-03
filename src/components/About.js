import React from 'react'
import AboutParagraph from './AboutParagraph'
import Skills from './Skills'

export default function About(props) {
  return (
    <div className="px-8 lg:px-24 py-20">

      <AboutParagraph parentCallBack={props.parentCallBack} page={props.page} />

      <hr className="my-14" />

      <Skills parentCallBack={props.parentCallBack} page={props.page} />

    </div>
  )
}