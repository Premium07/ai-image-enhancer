import axios from "axios";

const API_KEY = "wx1rqdy3f3c5wytin";
const BASE_URL = "https://techhk.aoscdn.com";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("image uploaded:", taskId);

    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("enhanced image data:", enhancedImageData);

    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing image", error);
    throw error; // Re-throw to allow caller to handle
  }
};

const uploadImage = async (file) => {
  // code to upload image
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id)
    throw new Error("Failed to upload image, Task ID not found");

  return data.data.task_id; // Changed from taskId to task_id
};

const fetchEnhancedImage = async (taskId) => {
  // code to fetch enhanced image
  if (!taskId) {
    throw new Error("Task ID is undefined");
  }

  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data)
    throw new Error("Failed to fetch enhanced image! Image not found");

  console.log(data.data);

  return data.data;
};

const pollForEnhancedImage = async (taskId, retries = 0) => {
  if (!taskId) {
    throw new Error("Task ID is undefined");
  }

  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log("processing...");

    if (retries >= 20)
      throw new Error("Max retries reached. Please try again later.");

    // wait for 2 second
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnhancedImage(taskId, retries + 1);
  }
  console.log("Enhanced image url:", result);
  return result;
};
