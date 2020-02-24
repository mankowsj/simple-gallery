const pathPrefix = 'src/assets/images/';
const extension = '.jpg';
const defaultImageList = ['1', '2', '3', '4', '5', '6', '7', '8'].map((filename, index) => ({
  filename,
  filepath: `${pathPrefix}${filename}${extension}`,
  location: pathPrefix,
  extension,
  index
}));
const localStorageKey = 'image-list';

const updateStore = (list: ReduxImage[]) => {
  const newValue = JSON.stringify(list);
  localStorage.setItem(localStorageKey, newValue);
  return JSON.parse(newValue);
};
const getStoreList = () => {
  const listStr = localStorage.getItem(localStorageKey);
  if (listStr) {
    return JSON.parse(listStr);
  }
  return listStr;
};

const getDefaultImageList = () => JSON.parse(JSON.stringify(defaultImageList));

const getImageList = (): ReduxImage[] => {
  const storeList = getStoreList();
  if (storeList) {
    return storeList;
  }
  return updateStore(defaultImageList);
};

export {updateStore, getImageList, getDefaultImageList};
