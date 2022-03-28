import IPhoto from "../../@types/Photo";
import Photo from "../Photo/Photo";
import "./PhotosList.scss";

export interface PhotosListProps {
  photos: IPhoto[] | undefined;
}

function PhotosList(props: PhotosListProps) {
  const { photos } = props;

  if (photos === undefined) {
    return (
      <div className="photos-list">
        <p>Come on, search for some photos!</p>
      </div>
    );
  }

  return (
    <div className="photos-list">
      {photos!.length > 0 ? (
        photos!.map((photo) => {
          return <Photo photo={photo} key={photo.id} />;
        })
      ) : (
        <p>No photos found :(</p>
      )}
    </div>
  );
}

export default PhotosList;
