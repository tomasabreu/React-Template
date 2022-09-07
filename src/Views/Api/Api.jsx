import React, { useEffect, useState } from 'react';
import api from '../../Api';

import { Container } from './styles';

const Api = () => {
  const [apiResponse, setApiResponse] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setApiResponse(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, []);

    return (
        <Container>
            <ul>
                {apiResponse && apiResponse.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </Container>
    );
};
export default Api;
