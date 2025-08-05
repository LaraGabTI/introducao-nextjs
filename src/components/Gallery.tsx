import { Card } from "./Card";

const items = [
  {
    title: "A Sociedade do Anel",
    description: "O início da jornada para destruir o Um Anel.",
    imageUrl: "https://cinemacomrapadura.com.br/imagens/2019/07/20190722-sda-a-sociedade-do-anel-tn.jpg",
    category: "Filme",
  },
  {
    title: "As Duas Torres",
    description: "A Irmandade se divide, e a guerra começa a se formar.",
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.TSXzuPRgtAnfq4pm2nUAUwHaEK?pid=Api&P=0&h=180",
    category: "Filme",
  },
  {
    title: "O Retorno do Rei",
    description: "A batalha final pelo destino da Terra Média.",
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.PCdk4u1grN6lzCc1s1bvaAHaEK?pid=Api&P=0&h=180",
    category: "Filme",
  },
  {
    title: "O Hobbit",
    description: "A aventura começa com Bilbo Bolseiro.",
    imageUrl: "https://is4-ssl.mzstatic.com/image/thumb/Video124/v4/54/ed/c3/54edc3a0-2c2e-c8e7-6e80-36815eb32a75/pr_source.lsr/1200x675.jpg",
    category: "Filme",
  },
  {
    title: "Silmarillion",
    description: "As origens míticas da Terra Média.",
    imageUrl: "https://cdn.kobo.com/book-images/58988082-972a-4140-9ab1-1d52ae81b4c5/1200/1200/False/the-silmarillion-12.jpg",
    category: "Livro",
  },
  {
    title: "Os Filhos de Húrin",
    description: "Uma das histórias mais trágicas do legendário de Tolkien.",
    imageUrl: "https://leitoresvigaristas.files.wordpress.com/2018/09/tumblr_mp4zhgumqc1s72jefo1_500.jpg",
    category: "Livro",
  },
  {
    title: "Shadow of Mordor",
    description: "Explore Mordor como um guerreiro com habilidades élficas.",
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.SVMHcsRmfiENZfFu-4D9uAHaEK?pid=Api&P=0&h=180",
    category: "Jogo",
  },
  {
    title: "Tales of the Shire",
    description: "Um simulador de vida de hobbit, com agricultura e tranquilidade no Condado.",
    imageUrl: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/04/the-lord-of-the-rings-tales-of-the-shire-hobbit-lady-watering-flowers.jpg",
    category: "Jogo",
}
];

export default function Gallery() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Galeria de Itens da Terra Média
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}