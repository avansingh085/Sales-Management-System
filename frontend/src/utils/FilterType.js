const FilterType = [
  { 
    name: 'Customer Region', 
    style: 'h-[28px] w-[148px] rounded p-[8px] gap-[8px]', 
    options: [
      { key: 'Customer Region', value: '' }, 
      { key: 'Asia', value: 'Asia' },
      { key: 'South', value: 'South' },
      { key: 'North', value: 'North' },
      {key:'West',value:'West'},
      {key:'Central',value:'Central'}
    ] 
  },
  { 
    name: 'Gender', 
    style: 'h-[28px] w-[87px] rounded p-[8px] gap-[8px]', 
    options: [
      { key: 'Gender', value: '' }, 
      { key: 'Male', value: 'Male' },
      { key: 'Female', value: 'Female' }, 
      
    ] 
  },
  { 
    name: 'Age Range', 
    style: 'h-[28px] w-[107px] rounded p-[8px] gap-[8px]', 
    options: [
      { key: 'Age Range', value: '' }, 
      { key: 'Under 18', value: '0-18' },
      { key: '18-24', value: '18-24' },
      { key: '25-34', value: '25-34' },
      { key: '35-44', value: '35-44' },
      { key: '45-54', value: '45-54' },
      { key: '55-64', value: '55-64' },
      { key: '65+', value: '65+' }
    ]
  },
  { 
    name: 'Product Category', 
    style: 'h-[28px] w-[149px] rounded p-[8px] gap-[8px]', 
    options: [
      { key: 'Product Category', value: '' }, 
      { key: 'Electronics', value: 'Electronics' },
      { key: 'Clothing', value: 'Clothing' },
      { key: 'Home', value: 'Home' },
      { key: 'Beauty', value: 'Beauty' },
      { key: 'Sports', value: 'Sports' }
    ] 
  },
  { 
    name: 'Tags', 
    style: 'h-[28px] w-[69px] rounded p-[8px] gap-[8px]', 
    options: [
      { key: 'Tags', value: '' }, 
      { key: 'formal', value:'formal' },
      { key: 'beauty', value: 'beauty' },
      { key: 'organic', value: 'organic' },
      { key: 'makeup', value: 'makeup' },
      {key:'fashion',value:'fashion'},
      {key:'unisex',value:'unisex'}
    ] 
  },
  { 
    name: 'Payment Method', 
    style: 'h-[28px] w-[147px] rounded p-[8px] gap-[8px]', 
    options: [
      { key: 'Payment Method', value: '' },
      {key:'Credit Card',value:'Credit Card'},
      {key:'Debit Card',value:'Debit Card'},
      {key:'Wallet',value:'Wallet'},
      { key: 'UPI', value: 'UPI' },
      { key: 'Cash', value: 'Cash' },
      {key:'Net Banking',value:'Net Banking'}
    ] 
  },
  { 
    name: 'Date', 
    style: 'h-[28px] w-[70px] rounded p-[8px] gap-[8px]', 
    options: [
      { key: 'Date', value: '' }, 
      { key: 'Today', value: 'today' },
      { key: 'Yesterday', value: 'yesterday' },
      { key: 'Last 7 Days', value: 'last_7_days' },
      { key: 'Last 30 Days', value: 'last_30_days' },
      { key: 'This Month', value: 'this_month' },
      { key: 'Last Month', value: 'last_month' }
    ] 
  },
];

export default FilterType;