
interface cardPorps {
    title: string,
    description: string,
    imagemUrl: string, 
}

export function Card({ title, description, imagemUrl }: cardPorps) {
    return (

        <div className="
        bg-violet-200 
        p-6 rounded-xl 
        hover:shadow-md transition duration-300"
        >
            <div className="text-4xl mb-4"></div>
            <h3 className="
            text-xl font-semibold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600">{description}</p>
             <img 
                src={imagemUrl} 
                alt={title}
                className="w-12 h-12 mb-4 object-contain" 
            />

        </div>
    )
}