import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/generateEnhancedImage";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setIsLoading(true);

    // invoke api here

    try {
      const enhancedUrl = await enhancedImageAPI(file);
      setEnhancedImage(enhancedUrl);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={isLoading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
