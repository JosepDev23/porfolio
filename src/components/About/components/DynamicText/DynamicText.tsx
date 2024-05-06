import React, { useState } from 'react'
import './DynamicText.css'
import Dropdown from '../../../generic/Dropdown/CustomDropdown'
import AboutTxt from './texts/AboutTxt'
import AboutJson from './texts/AboutJson'

const DynamicText: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('.txt')

  return (
    <section className="about">
      <div className="about-title-wrapper">
        <h1 className="about-title">About_me</h1>
        <Dropdown
          options={['.txt', '.json']}
          defaultOption=".txt"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      {selectedOption === '.txt' && <AboutTxt />}
      {selectedOption === '.json' && <AboutJson />}
    </section>
  )
}

export default DynamicText
