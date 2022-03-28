import { render, screen } from "@testing-library/react";
import Photo, { PhotoProps } from "../Photo";

const defaultProps: PhotoProps = {
  photo: {
    id: "123",
    alt_description: "My photo description",
    urls: {
      thumb: "http://test.com/photo.png",
      full: "http://test.com/full_photo.png",
    },
  },
};

describe("Photo", () => {
  test("should render a photo", () => {
    render(<Photo {...defaultProps} />);
    expect(
      screen.getByAltText(defaultProps.photo.alt_description)
    ).toBeInTheDocument();
  });

  test("should render a thumbnail photo", () => {
    render(<Photo {...defaultProps} />);
    expect(
      screen.getByAltText(defaultProps.photo.alt_description)
    ).toHaveAttribute("src", defaultProps.photo.urls.thumb);
  });

  test("should render a link to full photo", () => {
    render(<Photo {...defaultProps} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      defaultProps.photo.urls.full
    );
  });
});
