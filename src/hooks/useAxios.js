import axiosData from "../configs/api/baseUrl";

// Media Header Configuration
const medieConfigs = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

// ? GET Method
export async function useGet(url, configs) {
  const response = await axiosData.get(url, configs);
  return response;
}

// ? POST Method
export async function usePost(url, formData, sendImage = false) {
  //> Will Send Image
  if (sendImage) {
    const response = await axiosData.post(url, formData, medieConfigs);
    return response;
  }

  //> Send just text
  const response = await axiosData.post(url, formData);
  return response;
}

// ? PUT Method
export async function usePut(url, formData, sendImage = false) {
  //> Will Send Image
  if (sendImage) {
    const response = await axiosData.put(url, formData, medieConfigs);
    return response;
  }
  //> Send just text
  const response = await axiosData.put(url, formData);
  return response;
}

// ? DELETE Method

export async function useDelete(url) {
  const response = await axiosData.delete(url);

  return response;
}
