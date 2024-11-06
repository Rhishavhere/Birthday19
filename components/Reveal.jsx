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
              <Heart className="mr-2" /> Chipo ekhane
            </Button>
          ) : (
            <div className="space-y-4 text-gray-700 animate-fade-in">
              <p className="font-poppins font-bold">My Dearest Sugar,</p>
              <p className="font-poppins">
                Onek onek valobasha. Tmi boro hoye jaccho go. I am seeing you grow. Ei kalkei 15 chile go.. dekho aj 19. Bhaba jaye!!
              </p>
              <p className="font-poppins font-bold">
                Here is a poem for this lil girl :
              </p>
              <p className="font-sofia">
              Roses are red,<br></br>
Violets are blue <br></br>
But there's something else true<br></br>
Im head over heels, completely for you!<br></br><br></br>

You're cute as a teddy<br></br>
With every single day becoming more maddy<br></br><br></br>

I would still hug you tight<br></br> 
Even when you steal fries or take my last bite.<br></br><br></br>

So heres to the laughs, the giggles, and cheer,<br></br>
To pizza and movie nights all through the year<br></br><br></br>
You are my partner-in-crime, my love and my girl,<br></br>
You are my favourite, you are my pearl<br></br><br></br>


              </p>
              <p className="font-semibold">
                Happy Birthday, my love ❤️
              </p>
              <p>Forever yours,</p>
              <p>Tomar Lichu Sonaaaaa</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
