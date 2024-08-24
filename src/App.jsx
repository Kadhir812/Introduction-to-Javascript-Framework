import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Text from './components/text';

const DataFetcher = () => {

  

  // useEffect(() => {
  //   axios.get('http://localhost:3000/ajax')
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.log("error",error)
  //     });
  // }, []);

  return (
    <div>
      {/* <h1>Posts</h1>
            <h2>{data.title}</h2>
            <p>userId: {data.userId}</p> */}
<Text name="logesh" />
<Text name="logjyhfesh" />
<Text name="logeshthfjyf" />
    </div>
  );
}

export default DataFetcher;
