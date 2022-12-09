import type { Blog } from '../../../interfaces';

export default function BlogCard(blog: Blog) {
  return (
    <div className="border-solid border-2 border-gray-300 mt-4 mr-4">
      <div className="rounded-3xl border-solid border border-green-500 bg-green-200/30 w-fit py-px px-3 ml-2 mt-4 text-emerald-700 font-bold">
        {blog.category}
      </div>
      <div className="mx-2 my-4">
        <img
          className="object-cover"
          src="https://loremflickr.com/640/360"
          alt="image"
        />
      </div>
      <div className="mx-2 my-4">
        <div className="font-bold text-2xl">{blog.title}</div>
        <div className="flow-root mt-2">
          <h3 className="float-left font-bold text-sm text-neutral-500">
            {blog.author}
          </h3>
          <p className="float-right font-bold text-sm text-neutral-500 mr-4">
            {blog.date}
          </p>
        </div>
      </div>
    </div>
  );
}
