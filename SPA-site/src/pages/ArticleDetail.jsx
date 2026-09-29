import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";
import Banner from "../components/article/articleDetail/Banner";
import Author from "../components/article/articleDetail/Author";
import Date from "../components/article/articleDetail/Date";
import Category from "../components/article/articleDetail/Category";
import Content from "../components/article/articleDetail/Content";
import Tags from "../components/article/articleDetail/Tags";
import Related from "../components/article/articleDetail/Related";
const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => (article.id === Number(id)));
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-12">
      <Banner articleCover={article.cover} articleTitle={article.title} />

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6 items-center">
          <Author articleAuthor={article.author.name} />
          <Date articleDate={article.date} />
          <Category articleCategory={article.category} />
        </div>
        <Content articleContent={article.content} />
        <Tags articleTags={article.tags} />
        <div className="border-t pt-6">
          <h3 className="text-xl font-bold mb-4 text-blue-700">مقالات مرتبط</h3>
          <Related articleRelated={article.related} />
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
