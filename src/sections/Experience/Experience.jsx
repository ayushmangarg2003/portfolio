import React from 'react'
import './Experience.css'
import SubHeader from '../../components/SubHeader/SubHeader'
import Timeline from '../../components/Timeline/Timeline'

const Experience = () => {
    return (
        <div className='expcontainer'>
            <div className="experience">
                <SubHeader heading='Experience' />
            </div >
            <Timeline />
        </div>)
}

export default Experience