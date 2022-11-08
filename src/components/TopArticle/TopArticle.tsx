import React from 'react';
import moment from 'moment';
import { toparticle } from './data';
import { trendingArticles } from './data';

const TopArticle = () => {
  return (
    <article className="mx-auto  max-h-1/3 max-w-7xl py-24 px-4 sm:px-6 lg:px-8  overflow-hidden">
      <div className="flex items-center">
        <h2 className="text-3xl font-bold">Top Article</h2>
      </div>
      <div className="grid lg:grid-cols-6 h-96 mt-2 ">
        {/* top article */}
        <div className="col-start-1 col-end-5 bg-slate-300 overflow-hidden relative">
          <img
            src={toparticle?.img}
            alt={toparticle?.title}
            className="object-cover w-full h-auto "
          />
          {/* overlay */}
          <div className=" opacity-50 absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-900 z-30"></div>
          <div className="w-3/4 h-3/4  border-1 border-slate-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col justify-end items-left">
            <small className="text-slate-200 font-semibold text-lg tracking-wider">
              {toparticle.badge}
            </small>
            <p className="text-white text-2xl">{toparticle.title}</p>
            <div>
              <button className="mt-3 rounded-sm px-6 py-3 text-white bg-green-400 hover:bg-green-500 justify-self-start opacity-80">
                Read Article
              </button>
            </div>
          </div>
        </div>
        {/* trending articles */}
        <div className=" p-6 col-start-5 col-end-7 overflow-auto h-96 relative flex flex-col gap-4">
          <div className="fixed bg-white -mx-6 px-4 w-full -mt-6 z-40">
            <h3 className="font-semibold text-2xl"> Trending</h3>
          </div>
          {/* list of trending articles */}
          {trendingArticles?.map((article) => (
            <div key={article?.id} className=" relative ">
              <small className="absolute top-0 -translate-y-1/2 font-bold tracking-wide text-slate-500 ">
                {article?.badge}
              </small>
              <p className="font-bold mt-2">{article?.title}</p>
              <div className="flex items-center  py-2 mt-1">
                {/* when posted and bloger*/}
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
    </article>
  );
};

export default TopArticle;
