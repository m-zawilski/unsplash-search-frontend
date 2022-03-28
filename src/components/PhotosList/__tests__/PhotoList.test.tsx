import { render, screen } from "@testing-library/react";
import PhotosList, { PhotosListProps } from "../PhotosList";

const defaultProps: PhotosListProps = {
  photos: [
    {
      id: "123",
      alt_description: "My photo description",
      urls: {
        thumb: "http://test.com/photo.png",
        full: "http://test.com/full_photo.png",
      },
    },
    {
      id: "124",
      alt_description: "My second photo description",
      urls: {
        thumb: "http://test.com/photo2.png",
        full: "http://test.com/full_photo2.png",
      },
    },
    {
      id: "125",
      alt_description: "My third photo description",
      urls: {
        thumb: "http://test.com/photo3.png",
        full: "http://test.com/full_photo3.png",
      },
    },
  ],
};

describe("Photo", () => {
  test("should show prompt message before photos are defined", () => {
    render(<PhotosList {...defaultProps} photos={undefined} />);
    expect(
      screen.getByText(/come on, search for some photos!/i)
    ).toBeInTheDocument();
  });

  test("should render all photos", () => {
    render(<PhotosList {...defaultProps} />);
    expect(screen.getAllByRole("img").length).toBe(3);
  });

  test("should display message if no photos found", () => {
    render(<PhotosList {...defaultProps} photos={[]} />);
    expect(screen.getByText(/no photos found :\(/i)).toBeInTheDocument();
  });
});
