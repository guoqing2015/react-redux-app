import axios from 'axios';
import { urls } from 'setting';


export const getShops = (condition) => {
  return axios.post(urls.queryShopClientUrl, condition)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export const getShopTypes = () => {
  return axios.post(urls.queryCodeValueUrl, { type_code: 'sc_industry' })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
