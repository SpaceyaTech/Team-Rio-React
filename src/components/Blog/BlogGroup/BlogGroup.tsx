import type { Blog } from '../../../interfaces';
import BlogCard from '../BlogCard/BlogCard';

export default function BlogGroup({ topic }: { topic: string }) {
  const topBlogs: Blog[] = [
    {
      id: 1,
      title: 'How to build a blog',
      category: 'Web Development',
      author: 'John Doe',
      date: '1 day ago',
    },
    {
      id: 2,
      title: 'How to build a blog',
      category: 'Product Design',
      author: 'John Doe',
      date: '1 day ago',
    },
    {
      id: 3,
      title: 'How to build a blog',
      category: 'Animating',
      author: 'John Doe',
      date: '1 day ago',
    },
  ];
  return (
    <section id="blog-group" className="mt-8 mx-8">
      <div className="flow-root">
        <h1 className="float-left font-bold text-3xl">{topic}</h1>
        <p className="float-right font-bold mr-4">See all</p>
      </div>
      <div className="grid grid-cols-3">
        {topBlogs.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              id={blog.id}
              category={blog.category}
              title={blog.title}
              author={blog.author}
              date={blog.date}
            />
          );
        })}
      </div>
    </section>
  );
}
