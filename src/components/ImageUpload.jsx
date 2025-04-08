import React from "react";
import { FiUploadCloud } from "react-icons/fi";

const ImageUpload = ({ uploadImageHandler }) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) uploadImageHandler(file);
  };

  return (
    <section className="bg-gray-800/50 backdrop-blur-xl rounded-2xl w-full p-6 max-w-4xl border border-gray-700/50">
      <label
        htmlFor="inputFile"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-600 rounded-xl text-center p-8 
        hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300 group"
      >
        <input
          type="file"
          id="inputFile"
          className="hidden"
          onChange={showImageHandler}
          accept="image/*"
        />
        <FiUploadCloud className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
        <span className="text-lg font-medium text-gray-300 block">
          Drop your image here, or <span className="text-blue-400">browse</span>
        </span>
        <span className="text-sm text-gray-500 mt-2 block">
          Supports JPG, PNG files
        </span>
      </label>
    </section>
  );
};

export default ImageUpload;
