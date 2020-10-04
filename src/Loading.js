import React from "react";

import loading from "./loading.gif";

// const EpisodeList = React.lazy(() => import("./EpisodeList"));
const Loading = () => (
    <div className="loading-img">
        <img src={loading} alt="loading" />
    </div>
);

export default Loading;
