import React from "react";

const Loading = () => {
  return (
    <article className="h-screen flex items-center justify-center w-screen">
      <div className="size-10 rounded-full border-2 border-t-amber-700 border-zinc-800 animate-spin"></div>
    </article>
  );
};

export default Loading;
