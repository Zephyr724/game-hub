import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImage = (url: string) => {
  if (!url) return noImage;
  const target = "media/";

  const urlIndex = url.indexOf(target) + target.length;

  const imgURL = url.slice(0, urlIndex);

  return imgURL + "crop/600/400/" + url.slice(urlIndex);
};

export default getCroppedImage;
