import Blogs from './components/Blog/Blogs';
import CategoryFilter from './components/Blog/CategoryFilter';
import BreakingNews from './components/Breaking/BreakingNews';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div>
      <Hero />
      <BreakingNews />
      <CategoryFilter />
      <Blogs />
    </div>
  );
}

export default App;
