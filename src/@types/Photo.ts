export default interface IPhoto {
  id: string;
  alt_description: string;
  urls: {
    thumb: string;
    full: string;
  };
}
