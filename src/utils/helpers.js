import {
  REMOVE_BG_API_URL,
  REMOVE_BG_API_KEY,
  MAX_PRODUCT_PRICE,
  MIN_PRODUCT_PRICE,
} from './constants';

export const blobToBase64 = (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

export const removeBgFromImage = async (image) => {
  const formData = new FormData();
  formData.append('image_file', image);
  formData.append('size', 'auto');

  const transparentBgImage = fetch(REMOVE_BG_API_URL, {
    method: 'POST',
    headers: { 'X-Api-Key': REMOVE_BG_API_KEY },
    body: formData,
  })
    .then((res) => res?.blob())
    .then((blob) => {
      const imageBase64 = blobToBase64(blob);
      return imageBase64;
    })
    .catch((e) => console.log(e));

  return transparentBgImage;
};

export const isProductPriceValid = (price) => {
  const isValidNumber = typeof price === 'number';
  const isInRange = price >= MIN_PRODUCT_PRICE && price <= MAX_PRODUCT_PRICE;

  return isValidNumber && isInRange;
};
