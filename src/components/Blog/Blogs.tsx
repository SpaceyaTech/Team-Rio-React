import BlogGroup from './BlogGroup/BlogGroup';

export default function Blogs() {
  const topTopics = ['Top Stories', 'Motion Design', 'Design', 'Illustration'];

  return (
    <section id="top-blogs">
      {topTopics.map((topic, index) => {
        return <BlogGroup key={index} topic={topic} />;
      })}
      ;
    </section>
  );
}
