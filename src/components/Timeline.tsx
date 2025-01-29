import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2016 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.roverpass.com/" target="_blank" rel="noreferrer">RoverPass.com</a>
            </h4>
            <p>
              Team Management, Ruby on Rails, GraphQL, React.js, Project Management, Digital Ocean, PostgreSQL.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Leader</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://smartbizloans.com/" target="_blank" rel="noreferrer">SmartBizLoans.com</a>
            </h4>
            <p>
              Team Leading, Ruby on Rails, Angular, AWS, Oracle DB, Agile.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2014"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Crowd Interactive</h4>
            <p>
              Ruby on Rails, SCRUM Master, Agile, MySQL, PHP.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009 - 2011"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <a href="https://www.modcloth.com/" target="_blank" rel="noreferrer">ModCloth.com</a>
            </h4>
            <p>
              E-commerce, Ruby on Rails, RSpec, MySQL, Jira, BDD, Pair Programming.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
