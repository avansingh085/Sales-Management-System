import React,{useEffect} from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import usePagination from '../hooks/usePagination'; 


const Pagination = ({ totalPages = 20 ,initialePage=1,search,setSearch}) => {
  const { 
    currentPage, 
    visiblePages, 
    nextPage, 
    prevPage, 
    goToPage, 
    isFirstPage, 
    isLastPage 
  } = usePagination(totalPages);
  useEffect(()=>{
   if(Array.isArray(search))
   {
    setSearch((pre)=>[...pre,{...pre[pre.length-1],startPage:(currentPage-1)*12+1,endPage:currentPage*12}])
   }
  },[currentPage])

  return (
    <div className='w-[1236px] h-[45px] flex items-center justify-center px-[16px] border-t border-gray-200 bg-white'>
      <div className='flex gap-[8px] items-center'>
        
       
        <button 
          onClick={prevPage}
          disabled={isFirstPage}
          className='w-[28px] h-[28px] rounded flex items-center justify-center text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed bg-[#F3F4F6]'
        >
          <ChevronLeft size={16} />
        </button>

        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-[28px] h-[28px] rounded flex items-center justify-center text-[12px] font-medium transition-colors ${
              currentPage === page
                ? 'bg-[#2C2E33] text-white' 
                : 'bg-[#F3F4F6] text-gray-600 hover:bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}

       
        <button 
          onClick={nextPage}
          disabled={isLastPage}
          className='w-[28px] h-[28px] rounded flex items-center justify-center text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed bg-[#F3F4F6]'
        >
          <ChevronRight size={16} />
        </button>

      </div>
    </div>
  );
};

export default Pagination;