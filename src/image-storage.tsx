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
  localStorage.setItem(localStorageKey, JSON.stringify(list));
};
const getStoreList = () => {
  const listStr = localStorage.getItem(localStorageKey);
  if (listStr) {
    return JSON.parse(listStr);
  }
  return listStr;
};

const getImageList = (): ReduxImage[] => {
  const storeList = getStoreList();
  if (storeList) {
    return storeList;
  }
  updateStore(defaultImageList);
  return defaultImageList;
};

export {updateStore, getImageList};
