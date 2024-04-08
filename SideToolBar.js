import React from 'react';
import { BsColumnsGap, BsLayers, BsBoxArrowUpRight, BsTextarea } from 'react-icons/bs';
import { GrBlockQuote, GrTable } from 'react-icons/gr';
import './styles.css'
import { FaAnchor, FaBox, FaCamera, FaClock, FaColumns, FaLink, FaMap, FaQuoteLeft, FaRemoveFormat, FaTextHeight, FaVideo } from 'react-icons/fa';
const SideToolbar = () => {
  return (
    <>
   
    <div className="side-toolbar">
      <div className="toolbar-item">
        <BsColumnsGap size={20} />
      </div>
      <div className="toolbar-item">
        <BsLayers size={20} />
      </div>
      <div className="toolbar-item">
        <BsBoxArrowUpRight size={20} />
      </div>
      <div className="toolbar-item">
        <GrBlockQuote size={20} />
      </div>
      <div className="toolbar-item">
        <GrTable size={20} />
      </div>
    </div>
     <div className="side-toolbar">
     <div className="grid">
       {/* Row 1 */}
       <div className="row">
        <span className="rowbtn"><FaQuoteLeft size={48} color='#999'/></span>
         <span className="rowbtn"><FaColumns  size={48} color='#999'/> </span>
       </div>
       {/* Row 2 */}
       <div className="row">
         <span className="rowbtn"><FaTextHeight  size={48} color='#999'/></span>
         <span className="rowbtn"><FaLink  size={48} color='#999'/></span>
       </div>
       {/* Row 3 */}
       <div className="row">
         <span className="rowbtn"><FaVideo  size={48} color='#999'/></span>
         <span className="rowbtn"><FaCamera  size={48} color='#999'/></span>
       </div>
       {/* Row 4 */}
       <div className="row">
         <span className="rowbtn"><FaRemoveFormat size={48} color='#999'/></span>
         <span className="rowbtn"><BsTextarea  size={48} color='#999'/></span>
       </div>
       <div className="row">
         <span className="rowbtn"><FaVideo  size={48} color='#999'/></span>
         <span className="rowbtn"><FaClock size={48} color='#999'/></span>
       </div>
       <div className="row">
         <span className="rowbtn"><FaAnchor  size={48} color='#999'/></span>
         <span className="rowbtn"><FaBox  size={48} color='#999'/></span>
       </div>
     </div>
   </div>
   </>
  );
};

export default SideToolbar;
