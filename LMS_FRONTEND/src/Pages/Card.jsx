import React from 'react';
import { SiConvertio, SiSimpleanalytics } from 'react-icons/si';
import { MdCampaign, MdOutlineAccountCircle } from 'react-icons/md';
import { motion } from 'framer-motion'; // Import Framer Motion

const Card = () => {
  const cards = [
    {
      id: 1,
      icon: <MdCampaign />,
      title: 'Automated Campaign Setup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sit ac turpis venenatis.',
    },
    {
      id: 2,
      icon: <SiConvertio />,
      title: 'Lead Scoring and Conversion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sit ac turpis venenatis.',
    },
    {
      id: 3,
      icon: <MdOutlineAccountCircle />,
      title: 'Personalized Customer Journeys',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sit ac turpis venenatis.',
    },
    {
      id: 4,
      icon: <SiSimpleanalytics />,
      title: 'Real-Time Analytics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, sit ac turpis venenatis.',
    },
  ];

  return (
    <div className="py-5 sm:py-10 px-4 sm:px-8 md:px-20 bg-[#f4f7fa] dark:bg-[#1a202c] transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="bg-white dark:bg-[#2d3748] dark:text-white rounded-lg p-5 text-gray-900 flex items-center shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }} // Initial position for smooth entry
            animate={{ opacity: 1, y: 0 }} // Fade-in and slide to position
            transition={{
              duration: 0.5,
              delay: index * 0.3, // Stagger each card's animation
            }}
            whileHover={{
              scale: 1.05, // Slight scale-up effect on hover for emphasis
              transition: { duration: 0.2 }, // Smooth transition for scale
            }}
          >
            <div className="bg-white/10 dark:bg-white/20 p-6 rounded-full text-2xl text-gray-900 dark:text-white mr-5">
              {card.icon}
            </div>
            <div>
              {/* Title with dynamic text color */}
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {card.title}
              </h3>
              {/* Description with dynamic text color */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
