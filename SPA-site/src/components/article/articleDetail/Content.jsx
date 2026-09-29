function Content({articleContent}) {
  return (
    <article className="prose prose-sm sm:prose-base prose-p:text-gray-700 leading-loose max-w-none mb-10">
      <p>
        {articleContent}
      </p>
    </article>
  );
}
export default Content