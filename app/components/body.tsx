// components/BodyInfo.tsx
import React from 'react';

const BodyInfo = () => {
    const bodyInfoItems = [
        { title: 'Height', value: "5'10\"" },
        { title: 'Bust', value: '34' },
        { title: 'Waist', value: '26' },
        { title: 'Hips', value: '34' },
        { title: 'Shoes', value: 'US 8' },
        { title: 'Dress', value: 'US 4' },
        { title: 'Hair', value: 'Black' },
        { title: 'Eyes', value: 'Black' },
      ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* Numbered Title */}
        <div className="flex items-center mb-6">
          <span className="text-2xl font-bold text-gray-500 mr-4">04</span>
          <h2 className="text-3xl font-bold">Measurements</h2>
        </div>

        {/* Body Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bodyInfoItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold mb-2">{item.title}</p>
                <p className="text-lg">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodyInfo;
