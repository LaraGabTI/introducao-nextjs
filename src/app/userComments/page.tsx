'use client';

import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import React, { useState } from "react";

interface Comentario {
  id: number;
  nome: string;
  mensagem: string;
  data: string;
}

function userComments() {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  const adicionarComentario = (nome: string, mensagem: string) => {
    const novo: Comentario = {
      id: Date.now(),
      nome,
      mensagem,
      data: new Date().toLocaleString(),
    };

    setComentarios([novo, ...comentarios]);
  };

  return (
    <section className="max-w-3xl mx-auto my-16 px-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
          💬 Deixe o seu comentário
        </h2>

        <CommentForm onEnviar={adicionarComentario} />

        {comentarios.length > 0 && (
          <>
            <hr className="my-8 border-gray-300" />
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Comentários recentes
            </h3>
          </>
        )}

        <CommentList comentarios={comentarios} />
      </div>
    </section>
  );
}

export default userComments;
