import React from "react";

const ImagePreview = () => {
  return (
    <section className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-white py-2 bg-gray-800 text-center ">
          Original Image
        </h2>
        <img src="" alt="" className="size-full object-cover" />
        <div className="h-80 flex items-center justify-center bg-gray-200">
          No Image selected
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-white py-2 bg-blue-800 text-center ">
          Enhanced Image
        </h2>
        <img src="" alt="" className="size-full object-cover" />
        <div className="h-80 flex items-center justify-center bg-gray-200">
          No Enhanced Image
        </div>
      </div>
    </section>
  );
};

export default ImagePreview;
