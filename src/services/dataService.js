import httpService from './httpService';
import { setLocalItem, getLocalItem } from '../utils/localStorageUtil';

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

  getListUser() {
    const token = getLocalItem('token');
    this.httpService.get('/users', { headers: { 'Authorization': "Bearer " + token } })
      .then((hui) => {
        console.log(hui);
      });
  }


}

export const DataService = new DataServiceClass(httpService);