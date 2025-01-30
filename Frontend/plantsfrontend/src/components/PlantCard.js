

import React from 'react';
import { FiDroplet, FiEdit2, FiTrash2 } from 'react-icons/fi';


const PlantCard = ({ plantName, plantImage, daysUntilWater, onUpdate, deletePlant }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex items-center gap-4 bg-[#FEFAE0]">
      {/* Image Section */}
      <img 
        src={plantImage} 
        alt={plantName} 
        className="w-20 h-20 object-cover rounded-lg" 
      />
      
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-2">
          <FiDroplet className="text-blue-500" size={36} />
          <h2 className="text-xl font-semibold">{plantName}</h2>
        </div>
        <p className="text-black">
          {daysUntilWater > 0 ? `Water in ${daysUntilWater} days` : 'Needs watering today!'}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onUpdate}
          className="flex items-center gap-1 bg-[#606C38] text-white px-3 py-1 rounded-lg hover:bg-[#283618]"
        >
          <FiEdit2 /> Update
        </button>
        <button
          onClick={deletePlant}
          className="flex items-center gap-1 bg-[#DDA15E] text-white px-3 py-1 rounded-lg hover:bg-[#D19148]"
        >
          <FiTrash2 /> Delete
        </button>
      </div>
    </div>
  );
};

export default PlantCard;

























 //2nd attempt. No image
// import React from 'react';
// import { FiDroplet, FiEdit2, FiTrash2 } from 'react-icons/fi';

// const PlantCard = ({ plantName, daysUntilWater, onUpdate, onDelete }) => {
//   return (
//     <div className="border rounded-lg shadow-md p-4 flex items-center gap-4 bg-[#FEFAE0]">
//       <div className="flex items-center gap-2">
//         <FiDroplet className="text-blue-500" size={36} />
//         <h2 className="text-xl font-semibold">{plantName}</h2>
//       </div>
//       <p className="text-black flex-grow">
//         {daysUntilWater > 0 ? `Water in ${daysUntilWater} days` : 'Needs watering today!'}
//       </p>
//       <div className="flex gap-2">
//         <button
//           onClick={onUpdate}
//           className="flex items-center gap-1 bg-[#606C38] text-white px-3 py-1 rounded-lg hover:bg-[#283618]"
//         >
//           <FiEdit2 /> Update
//         </button>
//         <button
//           onClick={onDelete}
//           className="flex items-center gap-1 bg-[#DDA15E] text-white px-3 py-1 rounded-lg hover:bg-[#D19148]"
//         >
//           <FiTrash2 /> Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PlantCard;

