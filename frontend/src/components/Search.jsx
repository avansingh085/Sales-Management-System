import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react'; 
import useDebounce from '../hooks/useDebounce'; 

const Search = ({search,setSearch}) => {
  const [type,setType]=useState(search[search.length-1].text);
  const debouncedSearchTerm = useDebounce(type, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      let fil=[...search,{...search[search.length-1],text:type,startPage:1,endPage:12}]
      setSearch(fil);
      console.log('Triggering API call for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="w-[400px] h-[32px] flex items-center px-[12px] gap-[8px] bg-[#F3F3F3] rounded text-gray-500">
      
      <SearchIcon size={16} />

      <input
        className="w-full h-full bg-transparent outline-none text-sm text-black placeholder-gray-400"
        value={type} 
        onChange={(e) => setType(e.target.value)}
        placeholder="Name, Phone no." 
      />
    </div>
  );
};

export default Search;