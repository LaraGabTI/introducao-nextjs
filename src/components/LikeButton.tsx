'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow hover:shadow-md hover:scale-105 transition-all duration-200 border border-gray-200"
    >
      <Heart
        className={`w-5 h-5 transition-all duration-200 ${
          likes > 0 ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'
        }`}
      />
      <span className="text-sm text-gray-700 font-medium">{likes}</span>
    </button>
  );
}
