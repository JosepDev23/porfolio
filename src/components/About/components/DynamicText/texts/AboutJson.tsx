import React from 'react'
import './AboutTxt.css'

const AboutJson: React.FC = () => {
  return (
    <div className="about-main">
      <p>&#123;</p>
      <p>&nbsp;&nbsp;"name": "Josep Ramon Ribera",</p>
      <p>&nbsp;&nbsp;{`"languages": {`}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"valencian": "native",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"spanish": "native",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"english": "B2",</p>
      <p>&nbsp;&nbsp;{`},`}</p>
      <p>&nbsp;&nbsp;{`"programming-languages-and-frameworks": {`}</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"typescript": "really-good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"html": "really-good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"css/sass": "really-good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"react": "really-good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"angular": "really-good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"astro": "good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"nestjs": "really-good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"java": "good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"springboot": "medium",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"c#": "good",</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;"entity-framework": "medium",</p>
      <p>&nbsp;&nbsp;{`},`}</p>
      <p>&nbsp;&nbsp;"soft-skills": [</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;"critical-thinking","communication","adaptability",
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;"problem-solving","self-motivation","leadership"
      </p>
      <p>&nbsp;&nbsp;]</p>
      <p>&#125;</p>
    </div>
  )
}

export default AboutJson
