import React from 'react';


export const EmptyCollection = ({ name }) => (
  <div className="container empty-collection">
    <h1 className="empty-collection-message">"{name}" is an empty collection or it doesn't exist.</h1>
  </div>
);

export default EmptyCollection;