import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl">
      <img
        alt={article.title}
        className="w-full h-48 object-cover"
        src={article.cover}
      />
      <div className="p-5 flex flex-col gap-2">
        <span className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full w-fit font-semibold">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-semibold"
            >
              {tag}
            </span>
          ))}
        </span>
        <h2 className="font-bold text-lg text-gray-800 hover:text-indigo-600 transition line-clamp-2">
          {article.title}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-3">{article.content}</p>
        <div className="text-xs text-gray-400 mt-3">
          <span>{article.author.name}</span> | <span>{article.date}</span>
        </div>
        <Link
          to={`/article/${article.id}`}
          className="flex gap-2 text-sm text-indigo-600 mt-2 hover:underline font-medium w-fit"
        >
          مطالعه مقاله
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
export default ArticleCard;
