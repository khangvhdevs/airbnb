import { useState } from "react";

export const Test = () => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Seattle",
  ];

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // Filter options based on input value
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filteredOptions);

    // Show dropdown if there are filtered options
    setShowDropdown(filteredOptions.length > 0);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setInputValue(option);
    setShowDropdown(false);
  };

  return (
    <div className="bg-red-300">
      <input
        className="outline-neutral-500"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
      />
      {showDropdown && (
        <div className="dropdown">
          {filteredOptions.map((option) => (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      <div>Selected option: {selectedOption}</div>
    </div>
  );
};

export default Test;
