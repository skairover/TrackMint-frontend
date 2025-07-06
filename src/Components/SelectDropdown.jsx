import React, { useState, useRef, useEffect } from 'react';



function SelectDropdown({className="",options, Type}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative w-72 ${className}`} ref={dropdownRef}>
      <div
        className="border border-gray-300 p-2 rounded cursor-pointer bg-white"
        onClick={toggleDropdown}
      >
        {selected || `Select a ${Type}`}
        <span className="float-right">▼</span>
      </div>

      {isOpen && (
        <div className="absolute w-full bg-white border rounded mt-1 shadow z-10">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selected === option ? 'bg-gray-200 font-semibold' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectDropdown;
