import React from 'react';

const GridPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow rounded">Item 1</div>
          <div className="bg-white p-4 shadow rounded">Item 2</div>
          <div className="bg-white p-4 shadow rounded">Item 3</div>
          <div className="bg-white p-4 shadow rounded">Item 4</div>
        </div>
      </div>
    </div>
  );
};

export default GridPage;
