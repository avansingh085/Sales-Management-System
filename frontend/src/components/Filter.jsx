import React from 'react';
import FilterSelect from './FilterSelect';
import { RotateCcw } from 'lucide-react'; 
import FilterType from '../utils/FilterType';
const Filter = ({search,setSearch}) => {
    return (
        <div className='flex w-[1204px] h-[28px] justify-between items-center pr-[16px] pl-[17px]'>
           
            <div className='flex w-[879px] h-[28px] justify-between items-center'>
                <button className='w-[28px] h-[28px] bg-[#F3F3F3] rounded flex items-center justify-center text-gray-600 hover:text-black' onClick={()=>{
                    let fil=[...search];
                    if(fil.length>1)
                        fil.pop();
                    setSearch(fil);
                    }}>
                    <RotateCcw size={14} />
                </button>

                {FilterType.map((item, key) => (
                    <FilterSelect key={key} search={search} label={item.name} style={item.style} options={item.options} setSearch={setSearch} />
                ))}
            </div>

          
            <FilterSelect 
                label={"Sort by: Customer Name (A-Z)"}
                setSearch={setSearch}
                search={search}
                style={'h-[28px] w-[229px] rounded p-[8px] gap-[8px]'}
                options={ [
                    { key: 'Sort By:Customer Name (A–Z)', value: 'name_asc' },
                  {  key: 'Sort By:Date (Newest First)', value: 'date_desc' },
                       { key: 'Sort By:Quantity', value: 'quantity_desc' },
  
]}
            />

        </div>
    );
}

export default Filter;