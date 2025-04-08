import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="size-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin" />
      <p className="text-sm text-gray-400 animate-pulse">
        Enhancing your image...
      </p>
    </div>
  );
};

export default Loading;
