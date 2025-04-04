import React from 'react';

function Category() {
  const categories = ['마감임박', '국내여행', '해외여행'];

  return (
    <div className="flex justify-center space-x-4 py-4">
      {categories.map((category, index) => (
        <button key={index} className="bg-gray-200 py-2 px-4 rounded-md">
          {category}
        </button>
      ))}
    </div>
  );
}

export default Category;
