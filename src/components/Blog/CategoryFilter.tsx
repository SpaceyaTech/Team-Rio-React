import { useState } from 'react';
import BlogFilterButton from '../Button/BlogFilterButton';

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // TODO: TO be replaced with a call to the API
  const categories = [
    'Design',
    'Development',
    'Marketing',
    'Productivity',
    'Startups',
  ];

  const handleClick = (category: string) => {
    // TODO: Change this to an Id instead. Category is not exactly unique
    setSelectedCategory(category);
  };

  return (
    <section id="category-filter" className="mt-2">
      <div className="bg-black h-0.5 w-full"></div>
      <div className="h-24 flex justify-center items-center">
        {categories.map((category, index) => {
          return (
            <BlogFilterButton
              key={index}
              category={category}
              handleClick={handleClick}
              isActive={category === selectedCategory}
            />
          );
        })}
      </div>
      <div className="bg-black h-0.5 w-full"></div>
    </section>
  );
}
