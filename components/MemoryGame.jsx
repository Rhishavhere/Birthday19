"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Card, CardContent } from './ui/card';

const emojis = ['❤️', '🎂', '🎁', '🎈', '🌟', '🎉', '💝', '✨'];

export const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));
    setCards(shuffledCards);
  };

  const handleClick = (id) => {
    if (disabled || flipped.length === 2) return;
    if (flipped.includes(id)) return;

    setFlipped([...flipped, id]);

    if (flipped.length === 1) {
      setDisabled(true);
      const firstCard = cards[flipped[0]];
      const secondCard = cards[id];

      if (firstCard.emoji === secondCard.emoji) {
        setMatched([...matched, firstCard.id, secondCard.id]);
        setFlipped([]);
        setDisabled(false);
        if (matched.length + 2 === cards.length) {
          confetti();
        }
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-pink-600 mb-6">Dekhi tomar memory</h2>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              className={`h-24 flex items-center justify-center text-3xl cursor-pointer
                ${flipped.includes(card.id) || matched.includes(card.id) ? '' : 'bg-pink-100'}`}
              onClick={() => handleClick(card.id)}
            >
              {flipped.includes(card.id) || matched.includes(card.id) ? card.emoji : '?'}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};