import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const StoreIdKey = 'Admin-StoreId'

export function getToken() {
  // return Cookies.get(TokenKey)
   return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  // return Cookies.set(TokenKey, token)
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  return localStorage.removeItem(TokenKey)
}


export function getStoreId() {
  // return Cookies.get(TokenKey)
   return localStorage.getItem(StoreIdKey)
}

export function setStoreId(storeId) {
  // return Cookies.set(TokenKey, token)
  return localStorage.setItem(StoreIdKey, storeId)
}
