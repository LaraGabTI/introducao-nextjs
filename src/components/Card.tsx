interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
}

export function Card({ title, description, imageUrl, category }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {category && (
          <span className="absolute top-2 left-2 bg-violet-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
        )}

        {title === "Tales of the Shire" && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
            Em breve
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
