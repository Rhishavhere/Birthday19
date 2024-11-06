"use client"

import { useState } from "react";
import { Card, CardContent} from "./ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

export default function Reveal(){
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <CardContent>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">A Special Letter For You</h2>
          {!isRevealed ? (
            <Button onClick={() => setIsRevealed(true)} className="animate-pulse">
              <Heart className="mr-2" /> Open My Heart
            </Button>
          ) : (
            <div className="space-y-4 text-gray-700 animate-fade-in">
              <p>My Dearest,</p>
              <p>
                On your special day, I want to tell you just how much you mean to me.
                Your smile brightens my darkest days, your laugh is my favorite melody,
                and your love makes my world complete.
              </p>
              <p>
                Every moment with you is a gift, and Im grateful for each one.
                Youre not just my partner - youre my best friend, my adventure buddy,
                and my favorite person in the whole world.
              </p>
              <p>
                I hope this birthday brings you all the joy you deserve and more.
                Here's to many more years of creating beautiful memories together.
              </p>
              <p className="font-semibold">
                Happy Birthday, my love! ❤️
              </p>
              <p>Forever yours,</p>
              <p>Your Love</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
