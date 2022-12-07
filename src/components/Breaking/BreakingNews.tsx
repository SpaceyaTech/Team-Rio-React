import BreakingItem from './BreakingItem';

export default function BreakingNews() {
  return (
    // TODO: Move this section to align at bottom of hero
    <section id="breaking" className="">
      <div className="bg-white w-52 h-16 flex justify-center items-center font-bold">
        <p>Breaking News</p>
      </div>
      <div className="grid grid-cols-3 w-full">
        <BreakingItem />
        <BreakingItem />
        <BreakingItem />
      </div>
    </section>
  );
}
