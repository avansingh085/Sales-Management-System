import React from 'react';
import { Copy } from 'lucide-react';
import Loading from './Loading';
const SalesTable = ({ data }) => {

  const salesData = data && data.length > 0
    ? data.map((item) => ({
      transactionId: item['Transaction ID'],
      date: item['Date'],
      customerId: item['Customer ID'],
      customerName: item['Customer Name'],
      phone: item['Phone Number'],
      gender: item['Gender'],
      age: item['Age'],
      category: item['Product Category'],
      quantity: item['Quantity'],
      amount: `₹ ${item['Total Amount']}`,
      region: item['Customer Region'],
      productId: item['Product ID'],
      employee: item['Employee Name'],
    }))
    : []

  const headers = [
    "Transaction ID", "Date", "Customer ID", "Customer name", "Phone Number",
    "Gender", "Age", "Product Category", "Quantity", "Total Amount",
    "Customer region", "Product ID", "Employee name"
  ];

  return (
    <div className="w-[1204px] h-[740px] bg-white px-[16px]">

      <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
        <table className="w-full min-w-max table-auto text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 font-medium text-gray-500 text-xs  tracking-wide whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
         {Array.isArray(salesData)&&salesData.length>0 ? <tbody className="divide-y divide-gray-100">
            {salesData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap font-medium">
                  {row.transactionId}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.date}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
                  {row.customerId}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
                  {row.customerName}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  <div
                    className="flex items-center gap-2 group cursor-pointer"
                    onClick={() => navigator.clipboard.writeText(row.phone)}
                  >
                    <span>{row.phone}</span>
                    <Copy
                      size={14}
                      className="text-gray-400 group-hover:text-blue-500 transition-colors"
                    />
                  </div>

                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.gender}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.age}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
                  {row.category}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.quantity}
                </td>
                <td className="px-6 py-4 text-gray-900 font-bold whitespace-nowrap">
                  {row.amount}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.region}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
                  {row.productId}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">
                  {row.employee}
                </td>
              </tr>
            ))}
          </tbody> : <Loading/>}
        </table>
      </div>
    </div>
  );
};

export default SalesTable;