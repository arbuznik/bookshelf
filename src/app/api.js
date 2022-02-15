import axios from "axios"

export function api(path) {
  const baseURL = 'https://www.googleapis.com/books/v1/volumes'

  return axios.get(baseURL + path)
}




