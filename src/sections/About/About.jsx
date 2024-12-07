import React from 'react'
import SubHeader from '../../components/SubHeader/SubHeader'
import Details from '../../components/Details/Details'
import './About.css'
import Animation from '../../components/Animation/Animation'
import { DETAILS } from '../../utils/Helper'

function About() {
  return (
    <div className='aboutcontainer'>
      <div className="aboutme">
        <SubHeader heading='About me' />
        <Animation/>
        <Details details={DETAILS}/>
      </div >
    </div>
  )
}

export default About