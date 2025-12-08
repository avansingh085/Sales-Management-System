import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const FilterSelect = ({
  label,
  style,
  options = [],
  setSearch,
  search = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  let field = label.split(" ").join("");
  if (label.includes("Sort")) field = "sort";

  const isMultiple = label === "Tags";

  const lastSearchState =
    Array.isArray(search) && search.length > 0 ? search[search.length - 1] : {};
  let currentValue = lastSearchState[field];

  if (isMultiple) {
    if (!Array.isArray(currentValue)) {
      currentValue = currentValue ? [currentValue] : [];
    }
  } else {
    currentValue = currentValue || "";
  }
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (value) => {
    let newValue;

    if (isMultiple) {
      if (currentValue.includes(value)) {
        newValue = currentValue.filter((item) => item !== value);
      } else {
        newValue = [...currentValue, value];
      }
    } else {
      newValue = value;
      setIsOpen(false);
    }

    setSearch((prev) => {
      const last = prev[prev.length - 1] || {};
      return [
        ...prev,
        {
          ...last,
          [field]: newValue,
          startPage: 1,
          lastPage: 12,
        },
      ];
    });
  };

  const getDisplayText = () => {
    if (isMultiple) {
      if (currentValue.length === 0) return label;
      return `${currentValue.length} selected`;
    }
    const selectedOpt = options.find((opt) => opt.value === currentValue);
    return selectedOpt ? selectedOpt.key : `Select ${label}`;
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative flex items-center justify-between bg-[#F3F3F3] text-[12px] text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors ${style}`}
    >
   
     

     
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full h-full px-2"
      >
        <span className="truncate select-none">{getDisplayText()}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 min-w-full w-max mt-1 bg-white border border-gray-200 shadow-lg z-50 rounded-md">
         
          <div className="max-h-60 overflow-y-auto thin-scrollbar">
            {options.map((opt, index) => {
              const isSelected = isMultiple
                ? currentValue.includes(opt.value)
                : currentValue === opt.value;

              return (
                <div
                  key={index}
                  onClick={() => handleOptionClick(opt.value)}
                
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 whitespace-nowrap"
                >
                  {isMultiple && (
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="mr-2 h-3 w-3 accent-black cursor-pointer flex-shrink-0"
                    />
                  )}
                  <span
                    className={isSelected && !isMultiple ? "font-bold" : ""}
                  >
                    {opt.key}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSelect;