import React from "react";
import Loading from "./Loading";
import { IoCloudDownloadOutline } from "react-icons/io5";

const ImagePreview = ({ loading, uploaded, enhanced }) => {
  // Function to handle enhanced image download
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = enhanced;
    link.download = "enhanced-image.jpg"; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-white py-2 bg-gray-800 text-center">
          Original Image
        </h2>
        {uploaded ? (
          <img src={uploaded} alt="" className="size-full object-cover" />
        ) : (
          <div className="h-80 flex items-center justify-center bg-white text-gray-400">
            No image selected
          </div>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-white py-2 bg-blue-600 text-center">
          Enhanced Image
        </h2>
        {enhanced && !loading && (
          <div className="relative">
            <img src={enhanced} alt="" className="size-full object-cover" />
            <button
              onClick={handleDownload}
              className="absolute bottom-4 right-4 border bg-white/40 text-white cursor-pointer p-2 rounded-lg shadow  transition-colors"
            >
              <IoCloudDownloadOutline />
            </button>
          </div>
        )}

        {loading ? (
          <Loading />
        ) : (
          !enhanced && (
            <div className="h-80 flex items-center justify-center bg-white text-gray-400">
              No Enhanced Image
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ImagePreview;
