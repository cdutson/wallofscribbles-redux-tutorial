import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import TripList from './components/trip-list';
import TripItem from './components/trip-item';

//import configureStore from './configurations/configure-store';
//import configureProvider from './configurations/configure-provider';

//const store = configureStore();
const rootElement = document.getElementById('content');
const contentElements = (
  <TripList>
    <TripItem title="Trip A" style='YOLO' startDate='2016-10-03' endDate='2016-10-13'/>
    <TripItem title="Trip B" style='Classic' startDate='2016-10-23' endDate='2016-11-02'/>
    <TripItem title="Trip C" style='Rail' startDate='2016-11-10' endDate='2016-11-23'/>
  </TripList>
)
ReactDOM.render(contentElements, rootElement)
//ReactDOM.render(configureProvider(store), rootElement);
