import axios from "axios";
import IPhotosResponse from "../@types/PhotosResponse";

export const getPhotos = async (query: string, page = 1, perPage = 20) => {
  const response = await axios.get<IPhotosResponse>(`/search`, {
    params: {
      query,
      page,
      perPage,
    },
  });
  return response.data;
};
