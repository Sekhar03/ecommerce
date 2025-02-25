'use client';
import React from 'react';

interface EventProps {
  index: number;
  title: string;
  manageModal: (show: boolean, index: number, x: number, y: number) => void;
}

const Event: React.FC<EventProps> = ({ index, title, manageModal }) => {
  return (
    <div
      onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY); }}
      onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY); }}
      className="flex w-full justify-between items-center p-12 border-t border-gray-300 cursor-pointer transition-all duration-200 last:border-b"
    >
      <h2 className="text-5xl m-0 font-normal transition-all duration-400">{title}</h2>
      <p className="transition-all duration-400 font-light">Design & Development</p>
    </div>
  );
};

export default Event;