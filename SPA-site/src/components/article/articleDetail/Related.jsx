import { Link } from "react-router-dom";

function Related({ articleRelated }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {articleRelated.map((article) => (
        <Link
          key={article.id}
          to={`/article/${article.id}`}
          className="bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-md transition"
        >
          <img
            src={article.cover}
            alt={article.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h4 className="font-semibold text-gray-800">
              {article.title}
            </h4>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Related;