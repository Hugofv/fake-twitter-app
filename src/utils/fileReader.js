export const fileReader = (file, settings) => {
  const config = {
    onError: () => {},
    onLoadStart: () => {},
    onLoadEnd: () => {},
    ...settings,
  };

  if (!file.type.match('image.*'))
    if (typeof config.onError === 'function') config.onError.call(this);

  const reader = new FileReader();

  reader.onloadstart = () => {
    if (typeof config.onLoadStart === 'function')
      config.onLoadStart.call(this, { file });
  };
  reader.onloadend = data => {
    if (typeof config.onLoadEnd === 'function')
      config.onLoadEnd.call(this, {
        base64Image: data.target.result,
        type: file.type,
      });
  };
  reader.onerror = () => {
    if (typeof config.onError === 'function') config.onError.call(this);
  };

  reader.readAsDataURL(file);
  return reader;
};
