import axios from 'axios';
import {AsyncStorage} from 'react-native';

const URL = 'http://localhost:3000/api/'

export const Login = (credentials, callback) => {
  axios.post(URL + 'users/auth', { ...credentials })
    .then(async res => {
      if (res.data.success) {
        await AsyncStorage.setItem('jwt', res.data.token)
      }
      callback({
        done: res.data.error ? false : true,
        error: res.data.error
      });
    })
    .catch(err => {
      callback({
        done: false,
        error: err
      });
    })
}

export const Register = (user, callback) => {
  if (user.password !== user.passwordV) {
    callback({
      loaded: true,
      done: false,
      error: 'Passwords did not match!'
    })
  }
  axios.post(URL + 'users/register', {
    ...user
  })
    .then(res => {
      if (res.data.success) {
        Login(user, callback)
      } else {
        callback({
          done: false,
          error: res.data.error
        })
      }
    })
    .catch(err => {
      callback({
        done: false,
        error: 'Something bad happened, you are not supposed to see this'
      });
    });
}