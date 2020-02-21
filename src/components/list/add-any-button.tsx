import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button} from '../button';

type AnyButtonProps = {
  dispatch: (obj: any) => void;
  name: string;
};
const AddAnyButtonDispatch = ({name, dispatch}: AnyButtonProps) => (
  <Button onClick={() => {}} />
);

// function mapDispatchToProps(dispatch: any) {
//   return {actions: bindActionCreators(addToBasket, dispatch)};
// }
export const AddAnyButton = AddAnyButtonDispatch;
