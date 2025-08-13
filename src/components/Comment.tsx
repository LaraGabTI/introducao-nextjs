
import React from "react";

interface Comentario {
  id: number;
  nome: string;
  mensagem: string;
  data: string;
}

interface CommentProps {
  comentario: Comentario;
}

function Comment({ comentario }: CommentProps) {
  return (
    <div className="border p-4 rounded bg-gray-50">
      <div className="font-semibold">{comentario.nome}</div>
      <div className="text-sm text-gray-500">{comentario.data}</div>
      <p className="mt-2">{comentario.mensagem}</p>
    </div>
  );
}

export default Comment;
