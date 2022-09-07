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
        {apiResponse.map((post) => {
          return (
              <div className="post-card" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <div className="button">
                  <div className="delete-btn">Delete</div>
                </div>
              </div>
          );
        })}
    </Container>
  );
};
export default Api;
