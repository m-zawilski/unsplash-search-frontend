import IPhoto from "../../@types/Photo";
import { Card } from "react-bootstrap";
import "./Photo.scss";

export interface PhotoProps {
  photo: IPhoto;
}

function Photo(props: PhotoProps) {
  const { urls, alt_description } = props.photo;

  return (
    <a href={urls.full} target="_blank" rel="noreferrer">
      <Card className="photo-container">
        <Card.Img variant="top" src={urls.thumb} alt={alt_description} />
      </Card>
    </a>
  );
}

export default Photo;
