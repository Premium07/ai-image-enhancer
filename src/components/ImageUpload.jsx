import React from "react";

const ImageUpload = ({ uploadImageHandler }) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) uploadImageHandler(file);
  };
  return (
    <section className="bg-zinc-900 shadow-lg rounded-xl w-full p-4 max-w-2xl">
      <label
        htmlFor="inputFile"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-700 rounded-md text-center p-6 hover:border-blue-500 transition-all"
      >
        <input
          type="file"
          name=""
          id="inputFile"
          className="hidden"
          onChange={showImageHandler}
        />
        <span className="text-lg font-medium text-zinc-400">
          Click or drag to upload your image.
        </span>
      </label>
    </section>
  );
};

export default ImageUpload;
