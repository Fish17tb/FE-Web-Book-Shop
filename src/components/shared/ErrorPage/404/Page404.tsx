import "../error.scss";

const Page404 = () => {
  return (
    <div className="wrapper">
      <div className="container">
        {/* Clouds */}
        <div id="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x1_5"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>

        {/* Content */}
        <div className="c">
          <div className="_404">404</div>
          <div className="_1">THE PAGE</div>
          <div className="_2">WAS NOT FOUND</div>
          <a className="btn" href="/">
            BACK HOME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page404;
