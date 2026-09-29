function Tags({articleTags}) {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
        {articleTags.map((article)=>{
            return article
        })}
      </span>
    </div>
  );
}
export default Tags;
