import axios from 'axios';

export function getPrimaryAccount() {
  return axios
    .get('/primary-account')
    .then((res) => res.data);
}

export function getTransactions(id) {
  return axios
    .get(`/accounts/${id}/transactions`)
    .then((res) => res.data);
}

export function getPrimaryAccountTransactions() {
  return getPrimaryAccount()
    .then((primaryAccount) => {
      return getTransactions(primaryAccount.id);
    });
}
