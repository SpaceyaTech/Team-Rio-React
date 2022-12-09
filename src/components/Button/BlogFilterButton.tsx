import type { BlogFilterButtonProps } from '../../interfaces';

export default function BlogFilterButton(props: BlogFilterButtonProps) {
  const style = props.isActive
    ? 'bg-black hover:bg-gray-700 text-white'
    : 'bg-gray-200 hover:bg-gray-100 text-black';

  return (
    <button
      type="button"
      className={`${style} font-bold py-2 px-4 ml-4 rounded-3xl`}
      onClick={() => props.handleClick(props.category)}
    >
      {props.category}
    </button>
  );
}
