import React from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt, FaEye, FaUndo, FaRedo, FaExpand, FaDownload, FaTrashAlt } from 'react-icons/fa';
import './styles.css'

const TopToolbar = () => {
  return (
    <div className="top-toolbar">
      <div className="device-icons">
        <div className="toolbar-item"><FaLaptop /></div>
        <div className="toolbar-item"><FaTabletAlt /></div>
        <div className="toolbar-item"><FaMobileAlt /></div>
      </div>
      <div className="action-icons">
        <div className="toolbar-item"><FaEye /></div>
        <div className="toolbar-item"><FaUndo /></div>
        <div className="toolbar-item"><FaRedo /></div>
        <div className="toolbar-item"><FaExpand /></div>
        <div className="toolbar-item"><FaDownload /></div>
        <div className="toolbar-item"><FaTrashAlt /></div>
      </div>
    </div>
  );
};

export default TopToolbar;
