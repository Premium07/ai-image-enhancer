import React from "react";
import Loading from "./Loading";
import { IoCloudDownloadOutline } from "react-icons/io5";

const ImagePreview = ({ loading, uploaded, enhanced }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = enhanced;
    link.download = "enhanced-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const EmptyState = ({ text }) => (
    <div className="h-80 flex flex-col items-center justify-center bg-gray-800/30 rounded-xl text-gray-400">
      <svg
        className="w-12 h-12 mb-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {text}
    </div>
  );

  return (
    <section className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-300 flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Original Image
        </h2>
        {uploaded ? (
          <div className="rounded-xl overflow-hidden bg-gray-800/30 p-1">
            <img
              src={uploaded}
              alt="Original"
              className="rounded-lg w-full h-80 object-cover"
            />
          </div>
        ) : (
          <EmptyState text="No image selected" />
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-300 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Enhanced Image
        </h2>
        {enhanced && !loading ? (
          <div className="rounded-xl overflow-hidden bg-gray-800/30 p-1 relative group">
            <img
              src={enhanced}
              alt="Enhanced"
              className="rounded-lg w-full h-80 object-cover"
            />
            <button
              onClick={handleDownload}
              className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-xl cursor-pointer
              opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-500"
            >
              <IoCloudDownloadOutline className="w-5 h-5" />
            </button>
          </div>
        ) : loading ? (
          <div className="h-80 rounded-xl bg-gray-800/30 flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <EmptyState text="Upload image to see enhancement" />
        )}
      </div>
    </section>
  );
};

export default ImagePreview;
