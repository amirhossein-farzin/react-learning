import Blog from "../components/home/Blog";
import Category from "../components/home/Category";
import Course from "../components/home/Course";
import Hero from "../components/home/Hero";
import articles from "../data/articles";
import categories from "../data/categories";
import courses from "../data/courses";

function Home() {
  return (
    <>
      <div className="text-gray-800">
        {/* Hero Banner */}
        <Hero />

        {/* Categories */}
        <Category categories={categories}/>

        {/* Popular Courses */}
        <Course courses={courses}/>

        {/* Blog Section */}
        <Blog articles={articles}/>
      </div>
      ;
    </>
  );
}

export default Home;
