"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import { Card, CardContent } from './ui/card';
import confetti from 'canvas-confetti';

const messages = [
  {
    id: 1,
    message: "You are the sweetiest person I have ever met 💕",
    detail: "You are my girlfriend janooo heheh"
  },
  // Add more messages
];

export const InteractiveMessage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [playPop] = useSound('/pop.mp3', { volume: 0.5 });

  const handleClick = (id) => {
    playPop();
    setExpandedId(expandedId === id ? null : id);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="mb-16 mt-28">
      <h2 className="text-2xl font-semibold text-pink-600 mb-6 ">Special Messages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            layoutId={`container-${msg.id}`}
            onClick={() => handleClick(msg.id)}
            className="cursor-pointer"
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <AnimatePresence mode="wait">
                {expandedId === msg.id ? (
                  <motion.div
                    key="detail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-gray-700">{msg.detail}</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-lg text-gray-800">{msg.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};