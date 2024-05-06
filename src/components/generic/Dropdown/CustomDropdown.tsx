import React, { useState } from 'react'
import './CustomDropdown.css'

interface DropdownProps {
  options: string[]
  defaultOption: string
}

const Dropdown: React.FC<DropdownProps> = ({ options, defaultOption }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectOption = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleToggleDropdown}>
        <h1>{selectedOption || defaultOption}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
