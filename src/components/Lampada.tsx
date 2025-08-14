'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Lampada() {
  const [ligada, setLigada] = useState(false);

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center gap-6 transition-colors duration-500 ${
        ligada ? 'bg-yellow-400' : 'bg-black'
      }`}
    >
      {/* Lâmpada */}
      <Image
        src={ligada ? "/lampadaLigada.png" : "/lampadaApagada.png"}
        alt={ligada ? "Lâmpada acesa" : "Lâmpada apagada"}
        width={180}
        height={180}
      />

      {/* Interruptor clicável */}
      <button onClick={() => setLigada(!ligada)} className="focus:outline-none">
        <Image
          src={ligada ? "/interruptorOn.png" : "/interruptorOf.png"}
          alt="Interruptor"
          width={80}
          height={80}
          className="transition-transform hover:scale-110 active:scale-95"
        />
      </button>
    </div>
  );
}
