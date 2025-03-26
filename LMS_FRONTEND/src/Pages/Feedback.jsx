import React from 'react';
import lady1 from '../Assets/headshots/img-1.webp';
import lady2 from '../Assets/headshots/img-2.webp';
import lady3 from '../Assets/headshots/img-3.webp';
import { RiDoubleQuotesL } from "react-icons/ri";

const Feedback = () => {
  const feedback = [
    {
      image: lady1,
      icon: <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady2,
      icon: <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
    {
      image: lady3,
      icon: <RiDoubleQuotesL />,
      name: 'Dianne Russell',
      company: 'Company',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
    },
  ];

  return (
    <div className="py-5 sm:py-10 px-4 sm:px-8 md:px-20 bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
      <h5 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        Hear From Our Clients
      </h5>
      {/* Flex container to wrap cards responsively */}
      <div className="flex justify-center gap-6 overflow-x-auto flex-wrap">
        {feedback.map(({ image, icon, name, company, comment }, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 border-2 border-[#0e1c30] rounded-lg p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] min-w-[280px] dark:border-[#4a5568] dark:bg-[#2d3748] dark:text-white"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt={`Profile picture of ${name}`}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <h5 className="text-sm sm:text-base font-medium mb-1 text-gray-900 dark:text-white">{name}</h5>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">{company}</p>
              </div>
            </div>
            {/* Comment Section */}
            <div className="text-purple-600 dark:text-purple-400">
              <h2 className="text-2xl">{icon}</h2>
            </div>
            <p className="text-sm sm:text-base leading-6 text-gray-800 dark:text-gray-300">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;

// import React from 'react';
// import lady1 from '../Assets/headshots/img-1.webp';
// import lady2 from '../Assets/headshots/img-2.webp';
// import lady3 from '../Assets/headshots/img-3.webp';
// import { RiDoubleQuotesL } from "react-icons/ri";

// const Feedback = () => {
//     const feedback = [
//         {
//             image: lady1,
//             icon: <RiDoubleQuotesL />,
//             name: 'Dianne Russell',
//             company: 'Company',
//             comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
//         },
//         {
//             image: lady2,
//             icon: <RiDoubleQuotesL />,
//             name: 'Dianne Russell',
//             company: 'Company',
//             comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
//         },
//         {
//             image: lady3,
//             icon: <RiDoubleQuotesL />,
//             name: 'Dianne Russell',
//             company: 'Company',
//             comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.',
//         },
//     ];

//     return (
//         <div className="py-5 sm:py-10 px-4 sm:px-8 md:px-20 bg-[#f4f7fa]">
//             <h5 className="text-center text-3xl sm:text-4xl font-bold mb-10">Hear From Our Clients</h5>
//             <div className="flex justify-center gap-6 sm:gap-10">
//                 {feedback.map(({ image, icon, name, company, comment }, index) => (
//                     <div
//                         key={index}
//                         className="flex flex-col gap-5 border-2 border-[#0e1c30] rounded-lg p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg w-full sm:w-[300px] md:w-[350px]"
//                     >
//                         {/* User Info */}
//                         <div className="flex items-center gap-4">
//                             <img
//                                 src={image}
//                                 alt={`Profile picture of ${name}`}
//                                 className="w-12 h-12 object-cover rounded-full"
//                             />
//                             <div>
//                                 <h5 className="text-sm sm:text-base font-medium mb-1">{name}</h5>
//                                 <p className="text-xs sm:text-sm text-gray-700">{company}</p>
//                             </div>
//                         </div>
//                         {/* Comment Section */}
//                         <div className="text-purple-600">
//                             <h2 className="text-2xl">{icon}</h2>
//                         </div>
//                         <p className="text-sm sm:text-base leading-6 text-gray-800">{comment}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Feedback;
