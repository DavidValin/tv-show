import {IImage} from './state/initial_state';
import noImage from './assets/img/no-image.png';

/**
 * Retrieves the best available image or a "no image" placeholder image
 * @param imgContainer The image container where the image url are
 */
const getAvailableImage = (imgContainer:IImage) => {
  if (imgContainer) {
    if (imgContainer.original) {
      return imgContainer.original;
    }
    if (imgContainer.medium) {
      return imgContainer.medium;
    }
  }
  return noImage;
}

export default getAvailableImage;