/* eslint-disable react/jsx-key */
import React from 'react';
import {AddAnyButton} from './add-any-button';

type ListProps = {
  data: string[];
};

export const List = ({data}: ListProps) => (
  <div>
    {data.map(fruit => (
      <div>
        <span>{fruit}</span>
      </div>
    ))}
  </div>
);
