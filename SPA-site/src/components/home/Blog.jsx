import { Link } from "react-router-dom";

function Blog({ articles }) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">جدیدترین مقالات آموزشی</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article) => {
            return (
              <Link to={`/article/${article.id}`}>
                <div
                  key={article.id}
                  className="border rounded-lg p-4 hover:shadow transition"
                >
                  <img
                    src={article.cover}
                    alt={article.title}
                    className="rounded h-[13rem] w-full object-cover mb-4"
                  />
                  <h4 className="text-lg font-semibold mb-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {article.introduction}
                  </p>
                  <div className="mt-3 text-blue-600 text-sm flex items-center gap-1">
                    <span>مطالعه مقاله</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Blog;
