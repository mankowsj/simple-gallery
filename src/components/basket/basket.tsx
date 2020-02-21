import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const DumbBasket = () => {
  const kek = 'test';

  return (
    <div style={{position: 'absolute', right: '20px', top: '20px'}}>
      in basket: {kek}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.warn('mapStateToProps', state);

  return {};
};

export const Basket = connect(mapStateToProps)(DumbBasket);
