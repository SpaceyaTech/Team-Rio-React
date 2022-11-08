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
            className="flex flex-col border-[#B2B3B3] border-2 p-3 gap-3 justify-center rounded-md"
            key={article?.id}
          >
            <div className="article__card__header">
              <div className="p-2 flex items-center">
                <small className="bg-[#F5FFFD] border-[1px] border-[#009975] text-[#009975] rounded-full px-3 py-0.5 font-bold tracking-wide">
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
                <small className="font-bold text-[#737373] text-lg">
                  {article?.writer}
                </small>
                {/* when posted */}
                <span className="flex items-center">
                  {/* TODO  get calender svg icon */}
                  <svg
                    className="mr-1"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z"
                      stroke="#737373"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 3V7"
                      stroke="#737373"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 3V7"
                      stroke="#737373"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 11H27"
                      stroke="#737373"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <small className="text-[#737373] font-bold text-base">
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
