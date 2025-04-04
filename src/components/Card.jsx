import React from 'react';

function Card({ title, date, image }) {
  return (
    <div className="w-60 h-80 bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{date}</p>
      </div>
    </div>
  );
}

export default Card;
