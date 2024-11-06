"use client"

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16 px-4 relative"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-10 right-10"
      >
        <Heart className="w-12 h-12 text-pink-500" />
      </motion.div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 mt-4">
        HAPPY BIRTHDAY SWEETHEART 🎂
      </h1>
      <p className="text-xl text-white font-cedar">
        Many many happy returns of the day. Stay amazing as you are ! ✨
      </p>
    </motion.header>
  );
};