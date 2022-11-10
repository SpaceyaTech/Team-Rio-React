import moment from 'moment';
import Axios from '../../API/axios';
import { useEffect, useState } from 'react';

export interface articlesProp {
  id?: number;
  badge?: string;
  imgUrl?: string;
  title?: string;
  writer?: string;
  timestamp?: string;
  videoUrl?: string;
}

const BlogCards: React.FC = () => {
  const [articles, setArticles] = useState<articlesProp[]>([]);
  // get request to get articles
  const getArticles = async () => {
    return await Axios.get('/articles');
  };
  // onmount hydrate articles state
  useEffect(() => {
    getArticles().then((response) => setArticles(response?.data));
  }, []);
  return (
    // blog card wrapper
    <article className="mx-auto  max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-6">
        <h2 className="text-3xl font-bold text-neutral-900">Top Stories</h2>
        <h2 className="font-bold text-2 px-8 hover:text-neutral-900 text-neutral-700">
          See All
        </h2>
      </div>
      {/* cards wrapper */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:gap-12 md:gap-4 lg:gap-8 ">
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
              {/* article thumbnail image/ video  */}
              <div className="rounded-md aspect-square w-full overflow-hidden relative">
                {/* check if article has image or video */}
                {article.imgUrl ? (
                  <img
                    src={article?.imgUrl}
                    alt="meta"
                    className="object-fill h-full w-full "
                  />
                ) : (
                  // TODO get a beter video player(to allow for diffrent video formats)
                  <iframe
                    className="absolute w-full h-full bg-black"
                    src={article?.videoUrl}
                  >
                    Your browser does not support HTML5 video.
                  </iframe>
                )}
              </div>
              {/* article title */}
              <p className="font-bold mt-2">{article?.title}</p>
              <div className="flex  items-center justify-between  mt-2">
                {/* blogger */}
                <small className="font-bold text-[#737373] sm:text-lg lg:text-lg md:text-xs">
                  {article?.writer}
                </small>
                {/* when posted */}
                <span className="flex items-center">
                  {/* calender icon(svg) */}
                  <svg
                    className="transition ease-in-out mr-1 md:h-6 lg:h-9 sm:h-8"
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
                  {/* use momentjs library to get timestamp format i.e.(1 day ago) */}
                  <small className="text-[#737373] font-bold md:text-xs sm:text-sm lg:text-base shrink-0">
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

export default BlogCards;
