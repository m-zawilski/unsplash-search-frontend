import IPhoto from "./Photo";

export default interface IPhotosResponse {
  total: number;
  total_pages: number;
  results: IPhoto[];
}
