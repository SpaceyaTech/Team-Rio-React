import React from 'react';
import moment from 'moment';
import { toparticle } from './data';
import { trendingArticles } from './data';

const TopArticle = () => {
  return (
    // top article container
    <article className="mx-auto  max-h-1/3 max-w-7xl py-24 px-4 sm:px-6 lg:px-8  overflow-hidden">
      <div className="flex items-center">
        <h2 className="text-3xl font-bold">Top Article</h2>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-6 lg:h-96 sm:h-auto  mt-2 ">
        {/* top article */}
        <div className="lg:col-start-1 lg:col-end-5 bg-slate-300 overflow-hidden relative">
          <img
            src={toparticle?.img}
            alt={toparticle?.title}
            className="object-cover w-full h-auto "
          />
          {/* overlay (to darken image)*/}
          <div className=" opacity-50 absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-900 z-30"></div>
          <div className="w-3/4 h-3/4  border-1 border-slate-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-end items-left">
            {/* top article tag */}
            <small className="text-slate-200 font-semibold text-lg tracking-wider">
              {toparticle.badge}
            </small>
            {/* top article tittle */}
            <p className="text-white text-3xl">{toparticle.title}</p>
            <div>
              {/* cta */}
              <button className="mt-3 rounded-sm px-6 py-3 text-white bg-[#009975] hover:bg-[#00664E] justify-self-start opacity-80 flex gap-2 items-center">
                {/* svg eye icon */}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 5.25C5 5.25 2 12 2 12C2 12 5 18.75 12.5 18.75C20 18.75 23 12 23 12C23 12 20 5.25 12.5 5.25Z"
                    stroke="#FCFDFC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 15.75C14.5711 15.75 16.25 14.0711 16.25 12C16.25 9.92893 14.5711 8.25 12.5 8.25C10.4289 8.25 8.75 9.92893 8.75 12C8.75 14.0711 10.4289 15.75 12.5 15.75Z"
                    stroke="#FCFDFC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Read Article
              </button>
            </div>
          </div>
        </div>
        {/* trending articles */}
        <div className=" p-6 lg:col-start-5 lg:col-end-7 ">
          <div className=" bg-white -mx-6 px-4 w-full -mt-6 z-40">
            <h3 className="font-semibold text-2xl"> Trending</h3>
          </div>

          {/* list of trending articles */}
          {/* trending list wrapper */}
          <div className="overflow-auto h-96 flex flex-col gap-4">
            {trendingArticles?.map((article) => (
              <div key={article?.id} className=" relative ">
                {/* bagde/tag  */}
                <small className="absolute top-0 -translate-y-1/2 font-bold tracking-wide text-slate-500 ">
                  {article?.badge}
                </small>
                {/* blog title */}
                <p className="font-bold mt-2">{article?.title}</p>
                <div className="flex items-center  py-2 mt-1">
                  {/* when posted and blogger's name*/}
                  <span className="mr-2">
                    <small className="text-slate-700">
                      {moment(article?.timestamp).startOf('day').fromNow()} by{' '}
                      {article?.writer}
                    </small>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TopArticle;
