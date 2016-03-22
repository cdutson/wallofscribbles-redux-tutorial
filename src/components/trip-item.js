import React from 'react';

const TripItem = ({title, style, startDate, endDate}) => {

  return (
    <div className="ui card">
      <div className="image">
        <img src="http://placehold.it/290x290" />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <div><b>Style:<span className="">{style}</span></b></div>
          <div><b>Start date:<span className="date">{startDate}</span></b></div>
          <div><b>End date:<span className="date">{endDate}</span></b></div>
        </div>
        <div className="description">
          Description will go here
        </div>
      </div>
    </div>
  );
};

export default TripItem;
