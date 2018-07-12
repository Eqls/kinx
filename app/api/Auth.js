import axios from 'axios';
import {
  AsyncStorage,
  Platform
}
from 'react-native';

const androidIP = '192.168.1.251'
const URL = Platform.OS === 'ios' ? 'http://localhost:3000/api/' : 'http://' + androidIP + ':3000/api/';

export const Login = (credentials, callback) => {
  console.log('logging in', credentials);
  axios.post(URL + 'users/auth', { ...credentials
    })
    .then(async res => {
      console.log(res);
      console.log(res.data.success);
      if (res.data.success == true) {
        console.log('in');
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
      console.log('reg suc');
      if (res.data.success) {
        Login(user, callback)
      }
      else {
        callback({
          done: false,
          error: res.data.error
        })
      }
    })
    .catch(err => {
      console.log('error', err);
      callback({
        done: false,
        error: 'Something bad happened, you are not supposed to see this'
      });
    });
}