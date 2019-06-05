import httpService from './httpService';
import { setLocalItem, getLocalItem, removeLocalItem } from '../utils/localStorageUtil';

class DataServiceClass {
  constructor(httpService) {
    this.httpService = httpService;
  }

  signIn(email, password) {
    return this.httpService.post('/sign-in', { email, password })
      .then(({ data }) => {
        const token = data.token;
        setLocalItem('token', token);
      });
  }

  logOut() {
    return removeLocalItem('token');
  };

  getListUser() {
    const token = getLocalItem('token');
    return this.httpService.get('/users', { headers: { 'Authorization': "Bearer " + token } })
      .then(({ data }) => {
        return data;
      });
  };

  addUser(password, email, name) {
    const token = getLocalItem('token');
    return this.httpService.post('/users', {
      password,
      email,
      name
    }, { headers: { 'Authorization': "Bearer " + token } });
  };

  deleteUser(id) {
    const token = getLocalItem('token');
    return this.httpService.delete(`users/${ id }`, { headers: { 'Authorization': "Bearer " + token } });
  };
}

export const DataService = new DataServiceClass(httpService);