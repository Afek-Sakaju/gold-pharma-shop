// eslint-disable-next-line import/prefer-default-export
export const removeBgFromImage = async (image) => {
  const formData = new FormData();
  formData.append('image_file', image);
  formData.append('size', 'auto');

  const apiKey = process.env.REACT_APP_REMOVE_BG_API_KEY;

  const transparentBgImage = fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: { 'X-Api-Key': apiKey },
    body: formData,
  })
    .then((res) => res.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      return url;
    })
    .catch((e) => console.log(e));

  return transparentBgImage;
};
