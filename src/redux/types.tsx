import {PositionList} from './actions';

type PositionActionType = typeof PositionList[number];

type GalleryReducerStore = {position: number};
type StoreType = {
  positionReducer: GalleryReducerStore;
};

export {PositionActionType, StoreType};
