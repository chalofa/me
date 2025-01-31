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
            <ul>
              <li>Successfully <b>led and expanded</b> the engineering team.</li>
              <li><b>Designed</b> and implemented <b>scalable architecture patterns</b>.</li>
              <li>Managed all <b>DevOps operations</b> and overseeing <b>production releases</b> and support.</li>
              <li>Stay <b>hands-on coding</b> to <b>deliver high-quality</b> features like:</li>
              <ul className="dashed">
                <li>Real-time Inventory Management.</li>
                <li>Booking Engine</li>
                <li>Distributed Availability integration</li>
                <li>GraphQL API</li>
                <li>eCommerce store</li>
              </ul>
            </ul>
            <p>
              <strong>Skills:</strong> <kbd>Team Management</kbd>, <kbd>Ruby on Rails</kbd>, <kbd>GraphQL</kbd>
              , <kbd>React.js</kbd>, <kbd>AWS</kbd>, <kbd>Digital Ocean</kbd>, <kbd>PostgreSQL</kbd>
              , <kbd>Project Management</kbd>.
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
            <ul>
              <li>Overseeing team of 5 remote Senior Software Engineers.</li>
              <li><b>Streamline data processes</b> for loan approval decisions.</li>
              <li>Focused on <b>building efficient, reliable systems</b>.</li>
              <li>Improve accuracy and speed in loan assessments</li>
            </ul>
            <p>
              <strong>Skills:</strong> <kbd>Team Leading</kbd>, <kbd>Ruby on Rails</kbd>, <kbd>Angular</kbd>
              , <kbd>AWS</kbd>, <kbd>Oracle DB</kbd>, <kbd>Agile</kbd>.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2014"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">CrowdInt</h4>
            <ul>
              <li><b>Managed projects</b> for over <b>15 US-based startups</b> at the leading Ruby on Rails development firm in LATAM</li>
              <li>Be responsible of the <b>quality of service delivered</b> to our clients.</li>
              <li><b>Define the Agile practices</b> that we followed on every project.</li>
            </ul>
            <p>
              <strong>Skills:</strong> <kbd>Ruby on Rails</kbd>, <kbd>SCRUM Master</kbd>, <kbd>Agile</kbd>
              , <kbd>MySQL</kbd>, <kbd>PHP</kbd>
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
            <ul>
              <li><b>Optimized</b> the e-commerce platform.</li>
              <li>Focused mostly in the <b>backend</b> platform.</li>
              <li>Helped <b>support high traffic</b>, ensuring a smooth and efficient shopping experience.</li>
            </ul>
            <p>
              <strong>Skills:</strong> <kbd>E-Commerce</kbd>, <kbd>Ruby on Rails</kbd>, <kbd>RSpec</kbd>
              , <kbd>MySQL</kbd>, <kbd>Jira</kbd>, <kbd>BDD</kbd>, <kbd>Pair Programming</kbd>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
