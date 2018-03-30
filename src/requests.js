import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ?
    'localhost:5000' :
    'http://hr.harveyshi.com:5000/api';

export const addData =
    (email, age, hr, cb) => {
      const data = {
        'user_email': email,
        'user_age': parseInt(age, 10),
        'heart_rate': parseInt(hr, 10)
      };
      axios.post(baseURL + '/heart_rate', data)
          .then((res) => cb(res))
          .catch((error) => cb(error));
    }

export const getData = (email, cb) =>
    axios.get(`${baseURL}/heart_rate/${email}`)
        .then((res) => cb(res))
        .catch((error) => cb(error));