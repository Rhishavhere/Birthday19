"use client"

import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const photos = [
  {
    id: 1,
    src: "/api/placeholder/800/600",
    caption: "Our first date ❤️",
    memory: "Remember how nervous we both were? And now look at us!",
    date: "June 15, 2023"
  },
  {
    id: 2,
    src: "/api/placeholder/800/600",
    caption: "meow ❤️",
    memory: "Remember how nervous we both were? And now look at us!",
    date: "June 15, 2023"
  },{
    id: 3,
    src: "/api/placeholder/800/600",
    caption: "bow ❤️",
    memory: "Remember how nervous we both were? And now look at us!",
    date: "June 15, 2023"
  },{
    id: 4,
    src: "/api/placeholder/800/600",
    caption: "hehe ❤️",
    memory: "Remember how nervous we both were? And now look at us!",
    date: "June 15, 2023"
  },
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isFlipped, setIsFlipped] = useState({});

  const handleFlip = (id) => {
    setIsFlipped(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-pink-600 mb-6">Our Beautiful Memories</h2>

      <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent className="text-4xl">
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselContent>
      </Carousel>

      
      
      {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Card
              id="memorycard"
              className={`cursor-pointer transition-all duration-500 ${
                isFlipped[photo.id] ? 'rotate-y-180' : ''
              }`}
              onClick={() => handleFlip(photo.id)}
            >
              <div className="relative h-64">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                  <p className="text-white">{photo.caption}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-white p-4 rounded-lg backface-hidden rotate-y-180">
                <p className="text-gray-800">{photo.memory}</p>
                <p className="text-sm text-gray-500 mt-2">{photo.date}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div> */}
    </section>
  );
};
