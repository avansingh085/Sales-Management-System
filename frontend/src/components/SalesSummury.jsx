import React from 'react';
import { Info } from 'lucide-react'; 

const SalesSummary = ({totals}) => {
  return (
     
    <div className='w-[1236px] p-[16px]'>
      
      <div className='flex gap-[16px]'>
       
        <div className='min-w-[154px] h-[62px] py-[8px] px-[16px] rounded border border-gray-200 bg-white flex flex-col justify-center'>
          <div className='flex items-center gap-2 mb-1'>
            <span className='text-[12px] text-gray-600 font-medium'>Total units sold</span>
            <Info size={12} className="text-gray-400" />
          </div>
          <div className='text-[14px] font-bold text-gray-900'>
            {totals?.totalUnits||0}
          </div>
        </div>

        <div className='min-w-[180px] h-[62px] py-[8px] px-[16px] rounded border border-gray-200 bg-white flex flex-col justify-center'>
          <div className='flex items-center gap-2 mb-1'>
            <span className='text-[12px] text-gray-600 font-medium'>Total Amount</span>
            <Info size={12} className="text-gray-400" />
          </div>
          <div className='text-[14px] font-bold text-gray-900'>
            ₹{totals?.totalAmount||0} <span className="text-gray-500 font-normal text-[12px]">(19 SRs)</span>
          </div>
        </div>

        <div className='min-w-[180px] h-[62px] py-[8px] px-[16px] rounded border border-gray-200 bg-white flex flex-col justify-center'>
          <div className='flex items-center gap-2 mb-1'>
            <span className='text-[12px] text-gray-600 font-medium'>Total Discount</span>
            <Info size={12} className="text-gray-400" />
          </div>
          <div className='text-[14px] font-bold text-gray-900'>
            ₹{totals?.totalDiscount||0} <span className="text-gray-500 font-normal text-[12px]">(45 SRs)</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SalesSummary;