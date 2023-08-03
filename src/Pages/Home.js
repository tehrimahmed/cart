import React, { Fragment } from 'react'
import { Navibar } from '../Components/Header/Navibar'
import { Items } from './Items';

export const Home = () => {
  return (
    <Fragment>
        <Navibar />
        <Items />
    </Fragment>
  )
};
