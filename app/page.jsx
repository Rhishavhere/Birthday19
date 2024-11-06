"use client"

import { Header } from '@/components/Header';
import { PhotoGallery } from '@/components/PhotoGallery';
import { MemoryGame } from '@/components/MemoryGame';
import { InteractiveMessage } from '@/components/InteractiveMessage';
import Reveal from '@/components/Reveal';


export default function BirthdayWebsite() {
  return (
    
      <div className="min-h-screen bg-gradient-to-b ">
        <Header />
        <main className="max-w-6xl mx-auto px-4 pb-16">
          <PhotoGallery />
          <MemoryGame />
          <InteractiveMessage />
          <Reveal/>
        </main>
        <footer className="text-center py-8 bg-white/50">
          <p className="text-lg text-pink-600">
            Wishing you everything in life ❤️
          </p>
        </footer>
      </div>
    
  );
}