import React from 'react'
import "./Timeline.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from '../../utils/Experience';

const Timeline = () => {

    return (
        <div className='timeline-parent'>
            <VerticalTimeline>
                {
                    experienceData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={item.time}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 key={index + 1} style={{fontSize:'1.25rem'}} className="vertical-timeline-element-title">{item.role}</h3>
                            <h4 key={index + 2} className="vertical-timeline-element-subtitle">{item.company}</h4>
                            <p key={index + 3} >{item.details}</p>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </div>
    )
}

export default Timeline