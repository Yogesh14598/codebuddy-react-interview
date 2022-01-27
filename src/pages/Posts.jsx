import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [postslist, setpostslist] = useState([]);

  useEffect(() => {
    axios
      .get('https://codebuddy.review/posts', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then(response => {
        console.log(response.data.data.posts);
        setpostslist(response.data.data.posts);
      })
      .catch(error => {
        console.log(error.data, 'error');
      });
  }, []);
  return (
    <>
      <h3>List of posts</h3>

      <table striped hover id="postlistitem">
        <thead>
          <tr>
            <th>
              <h6>SI NO</h6>
            </th>
            <th>
              <h6>Image</h6>
            </th>
            <th>
              <p>First Name </p>
            </th>
            <th>
              <p> Last Name</p>
            </th>
            <th>
              <p>Writeup</p>
            </th>
            <th>
              <p>Avathar </p>
            </th>
          </tr>
        </thead>

        <tbody>
          {postslist.map((item, index) => (
            <>
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.image} alt="" className="personimg" />
                </td>
                <td>
                  <p>{item.firstName}</p>
                </td>
                <td>
                  <p>{item.lastName}</p>
                </td>
                <td>
                  <p>{item.writeup}</p>
                </td>
                <td>
                  <p>{item.avatar}</p>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Posts;
