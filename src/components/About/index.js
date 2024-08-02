import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    return (
        <>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
              I am a third-year Computer Science student at the University of Calgary 
              with a solid foundation in data structures, algorithms, network infrastructure, 
              database management systems, computer architecture, statistics and software 
              engineering, and experience in front-end development projects with a solid 
              and practical understanding of these concepts.

              </p>
              <p align="LEFT">
              Strong academic background and projects in machine learning and front-end development that will 
              aid in any Software Engineering and Computer Science related internship roles. 
              </p>
              <p>
              I have a proficiency in multiple programming languages and good communication, organizational, 
              troubleshooting and teamwork-related skills
              </p>
            </div>

            <div className="icon-container">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        
        </div>
        <Loader type="pacman" />
        </div>
        </>
  )
}


export default About