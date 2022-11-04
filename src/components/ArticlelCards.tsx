const ArticlelCards = () => {
  return (
    <article className="top-articles">
      <h2 className="section-title">Top Stories</h2>
      <div className="article__card">
        <div className="article__card__header">
          <span className="label-tag">
            <small className="label__text">meta</small>
          </span>
          <img src="" alt="meta" className="article__thumpnail" />
          <p className="article__title">The Metaverse is in full swing</p>
          <div className="article__footer">
            <small>Ian Karewa</small>
            <span className="article__timestamp">
              <small>1 day ago</small>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticlelCards;
