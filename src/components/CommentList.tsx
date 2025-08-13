//commentlist

import React from "react";
import Comment from "./Comment";



interface Comentario {
  id: number;
  nome: string;
  mensagem: string;
  data: string;
}

interface CommentListProps {
  comentarios: Comentario[];
}

function CommentList({ comentarios }: CommentListProps) {
  if (comentarios.length === 0) {
    return <p className="text-gray-500">Nenhum comentário ainda.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      {comentarios.map((comentario: Comentario) => (
        <Comment key={comentario.id} comentario={comentario} />
      ))}
    </div>
  );
}

export default CommentList;
