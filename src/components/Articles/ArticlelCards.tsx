import moment from 'moment';
import { articles } from './data';

const ArticlelCards = () => {
  return (
    <article className="mx-auto  max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-6">
        <h2 className="text-3xl font-bold">Top Stories</h2>
        <h2 className="font-bold text-2 px-8 hover:text-slate-400">See All</h2>
      </div>
      {/* cards wrapper */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 ">
        {articles?.map((article) => (
          // article card
          <div
            className="flex flex-col border-slate-300 border-2 p-3 gap-3 justify-center rounded-md"
            key={article?.id}
          >
            <div className="article__card__header">
              <div className="p-2 flex items-center">
                <small className="bg-[#CCFFF3] border-[1px] border-green-700 text-green-700 rounded-full px-3 py-0.5 font-bold tracking-wide">
                  {article?.badge}
                </small>
              </div>
              {/* article thumbnail */}
              <div className="rounded-md aspect-square  overflow-hidden">
                <img
                  src={article?.img}
                  alt="meta"
                  className="object-fill h-full w-96 "
                />
              </div>
              {/* article title */}
              <p className="font-bold mt-2">{article?.title}</p>
              <div className="flex items-center justify-between  p-3 mt-2">
                {/* blogger */}
                <small className="font-bold text-base text-slate-400 ">
                  {article?.writer}
                </small>
                {/* when posted */}
                <span className="">
                  {/* TODO  get calender svg icon */}
                  <small className="text-slate-400 font-bold">
                    {moment(article?.timestamp).startOf('day').fromNow()}
                  </small>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ArticlelCards;
