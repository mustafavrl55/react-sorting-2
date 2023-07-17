import React, { useEffect, useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [data, setData] = useState(articles);

  const mostUpvoted = () => {
    const sort = [...data].sort((x, y) => y.upvotes - x.upvotes);
    setData(sort);
  };

  const mostRecent = () => {
    const sort = [...data].sort((x, y) => new Date(y.date) - new Date(x.date));
    setData(sort);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => mostUpvoted()}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => mostRecent()}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={data} />
    </div>
  );
}

export default App;
