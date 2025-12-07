import React from 'react';
import { ChevronDown } from 'lucide-react';
import useUrlFilters from '../hooks/useUrlFilters';
const FilterSelect = ({ label, style,options=[] ,setSearch,search=[]}) => {
  
  let field = label.replace(/\s+/g, ""); 
  if(label.includes('Sort'))
       field="sort";
 
  return (
   
    <div 
      className={`flex items-center justify-between bg-[#F3F3F3] text-[12px] text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors ${style}`}
    >
     

<select
  className="truncate"
  value={
    Array.isArray(search) && search.length > 0&& search[search.length - 1][field] || ""
      
  }
  onChange={(e) => {
    const value = e.target.value;

    setSearch((prev) => {
      const last = prev[prev.length - 1] || {};
      
      return [
        ...prev,
        {
          ...last,
          [field]: value,
          startPage:1,
          lastPage:12
        },
      ];
    });
  }}
>
  {Array.isArray(options) &&
    options.map((opt, index) => (
      <option key={index} value={opt.value}>
        {opt.key}
      </option>
    ))}
</select>

    </div>
  );
};

export default FilterSelect;