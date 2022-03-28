import { useState } from "react";
import IPhoto from "../@types/Photo";
import { getPhotos } from "../api/apiProxy";
import PhotosList from "../components/PhotosList/PhotosList";
import SearchBox from "../components/SearchBox/SearchBox";

function Photos() {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<IPhoto[] | undefined>(undefined);

  const onSearch = async (): Promise<void> => {
    const photosResponse = await getPhotos(query);
    setPhotos(photosResponse.results);
  };

  return (
    <>
      <SearchBox query={query} setQuery={setQuery} onSearch={onSearch} />
      <PhotosList photos={photos} />
    </>
  );
}

export default Photos;
