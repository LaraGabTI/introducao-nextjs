//commentForm 

import React, { useState } from "react";

interface CommentFormProps {
  onEnviar: (nome: string, mensagem: string) => void;
}

function CommentForm({ onEnviar }: CommentFormProps) {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome || !mensagem) return;

    onEnviar(nome, mensagem);
    setNome("");
    setMensagem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="block w-full mb-2 p-2 border"
      />

      <textarea
        placeholder="Sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        rows={3}
        className="block w-full mb-2 p-2 border"
      />

      <button type="submit"   className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition duration-200 cursor-pointer"
>
        Enviar
      </button>
    </form>
  );
}

export default CommentForm;
