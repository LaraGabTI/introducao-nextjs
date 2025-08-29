// components/Calculadora.tsx
"use client";
import React, { useState } from "react";

export default function Calculadora() {
  // Estado principal do visor, onde exibimos a operação e o resultado
  const [visor, setVisor] = useState<string>("0");

  // Função para limpar tudo e reiniciar a calculadora
  function limpar() {
    setVisor("0");
  }

  // Função para adicionar números e ponto decimal ao visor
  function adicionarNumero(ch: string) {
    // Se o visor estiver com erro, reiniciamos com o número clicado
    if (visor === "Erro") return setVisor(ch === "." ? "0." : ch);

    // Evita adicionar dois pontos decimais no mesmo número
    const ultimoNum = visor.split(/[+\-*/]/).pop() || "";
    if (ch === "." && ultimoNum.includes(".")) return;

    // Substitui o zero inicial pelo número digitado
    if (visor === "0" && ch !== ".") {
      setVisor(ch);
    } else {
      setVisor(visor + ch);
    }
  }

  // Função para adicionar um operador (+, -, *, /)
  function escolherOperador(op: string) {
    if (visor === "Erro") return;

    const ultimo = visor.at(-1) as string;
    // Se o último caractere já for um operador, substituímos pelo novo
    if (/[+\-*/]/.test(ultimo)) {
      setVisor(visor.slice(0, -1) + op);
    } else {
      // Caso contrário, apenas adicionamos o operador ao visor
      setVisor(visor + op);
    }
  }

  // Função para avaliar a expressão completa respeitando a prioridade dos sinais
  function avaliarExpressao(expr: string): number | null {
    try {
      // Remove operador final, se o usuário terminar com um
      if (/[+\-*/]$/.test(expr)) expr = expr.slice(0, -1);

      // Divide a expressão em tokens (números e operadores)
      const tokens = expr.match(/(\d+\.?\d*|\.\d+|[+\-*/])/g);
      if (!tokens) return 0;

      const valores: number[] = []; // Pilha de números
      const ops: string[] = [];     // Pilha de operadores

      // Prioridade dos operadores: * e / antes de + e -
      const prioridade: Record<string, number> = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
      };

      // Função auxiliar para aplicar o operador do topo da pilha
      function aplicarOperador() {
        const b = valores.pop() as number;
        const a = valores.pop() as number;
        const op = ops.pop() as string;
        let r = 0;
        switch (op) {
          case "+": r = a + b; break;
          case "-": r = a - b; break;
          case "*": r = a * b; break;
          case "/":
            if (b === 0) throw new Error("Divisão por zero");
            r = a / b; break;
        }
        valores.push(r);
      }

      // Percorre cada token separando números e operadores
      for (const token of tokens) {
        if (!isNaN(parseFloat(token))) {
          // Se for número, empilha
          valores.push(parseFloat(token));
        } else {
          // Enquanto o operador do topo tiver prioridade maior ou igual, aplica-o
          while (
            ops.length > 0 &&
            prioridade[ops[ops.length - 1]] >= prioridade[token]
          ) {
            aplicarOperador();
          }
          ops.push(token); // Empilha novo operador
        }
      }

      // Aplica todos os operadores restantes
      while (ops.length > 0) {
        aplicarOperador();
      }

      return valores[0];
    } catch {
      return null;
    }
  }

  // Função chamada ao clicar no botão "="
  function calcular() {
    if (visor === "Erro") return;

    const resultado = avaliarExpressao(visor);
    if (resultado === null || !Number.isFinite(resultado)) {
      setVisor("Erro");
    } else {
      // Formata o resultado para evitar casas decimais desnecessárias
      const texto = Number.isInteger(resultado)
        ? String(resultado)
        : String(+resultado.toFixed(10))
            .replace(/\.0+$/, "")
            .replace(/(\.\d*?)0+$/, "$1");
      setVisor(texto);
    }
  }

  return (
    <div style={{ width: "320px", margin: "24px auto", padding: "16px", borderRadius: "16px", boxShadow: "0 8px 24px rgba(0,0,0,.12)", background: "#111", color: "#fff" }}>
      {/* Display do visor */}
      <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "flex-end", fontSize: "28px", padding: "0 12px", background: "#000", borderRadius: "12px", overflowX: "auto" }}>
        {visor}
      </div>

      {/* Grade de botões */}
      <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
          <button
            key={btn}
            style={{ padding: "16px", fontSize: "18px", background: "#1f1f1f", borderRadius: "12px", border: "0", color: "#fff", cursor: "pointer" }}
            onClick={() => {
              if (["+","-","*","/"].includes(btn)) escolherOperador(btn);
              else if (btn === "=") calcular();
              else adicionarNumero(btn);
            }}
          >
            {btn}
          </button>
        ))}
        {/* Botão para limpar */}
        <button onClick={limpar} style={{ gridColumn: "span 4", padding: "12px", fontSize: "16px", background: "#e63946", border: "0", borderRadius: "12px", color: "#fff", marginTop: "8px" }}>C</button>
      </div>
    </div>
  );
}
