import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  CircleDot, 
  Book, 
  PlayCircle, 
  Columns, 
  XCircle, 
  CheckCircle2, 
  FileText, 
  FileClock, 
  FileCheck, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const SideBar = () => {
  
  const [openSections, setOpenSections] = useState({
    services: true,
    invoices: true
  });
  const [open,setOpen]=useState("dashboard");

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className='w-[220px] h-[954px] bg-[#F9FAFB] border-r border-gray-200 flex flex-col font-sans'>
    
      <div className="p-[16px] mb-4">
        <div className="flex items-center justify-between p-2 rounded-lg border border-gray-200 bg-white shadow-sm cursor-pointer">
          <div className="flex items-center gap-3">
          
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <div className="text-blue-500 font-bold text-lg">V</div> 
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-gray-900 leading-tight">Vault</span>
              <span className="text-[10px] text-gray-500 leading-tight">Anurag Yadav</span>
            </div>
          </div>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      </div>

      <div className="flex flex-col gap-1 px-4">
        <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
        <NavItem icon={<Users size={18} />} label="Nexus" />
        <NavItem icon={<CircleDot size={18} />} label="Intake" />
      </div>

    
      <div className="mt-6 px-4">
        <div 
          className="flex items-center justify-between text-gray-500 cursor-pointer hover:text-black mb-2"
          onClick={() => toggleSection('services')}
        >
          <div className="flex items-center gap-3 text-sm font-medium">
            <Book size={18} />
            <span>Services</span>
          </div>
          {openSections.services ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
        
        {openSections.services && (
          <div className="flex flex-col gap-1 pl-2">
            <NavItem icon={<PlayCircle size={16} />} label="Pre-active" isSubItem />
            <NavItem icon={<Columns size={16} />} label="Active" isSubItem />
            <NavItem icon={<XCircle size={16} />} label="Blocked" isSubItem />
            <NavItem icon={<CheckCircle2 size={16} />} label="Closed" isSubItem />
          </div>
        )}
      </div>

      <div className="mt-4 px-4">
        <div 
          className="flex items-center justify-between text-gray-500 cursor-pointer hover:text-black mb-2"
          onClick={() => toggleSection('invoices')}
        >
          <div className="flex items-center gap-3 text-sm font-medium">
            <FileText size={18} />
            <span>Invoices</span>
          </div>
          {openSections.invoices ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>

        {openSections.invoices && (
          <div className="flex flex-col gap-1 pl-2">
           
            <NavItem icon={<FileClock size={16} />} label="Proforma Invoices" isSubItem isActive />
            <NavItem icon={<FileCheck size={16} />} label="Final Invoices" isSubItem />
          </div>
        )}
      </div>

    </div>
  );
};

const NavItem = ({ icon, label, isSubItem = false, isActive = false }) => {
  const nav=useNavigate();
  return (
    <div onClick={()=>window.location=`/${label.split(" ").join('-')}`}  className={`
      flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors
      ${isSubItem ? 'text-[13px]' : 'text-[14px]'}
    `}>
     
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default SideBar;