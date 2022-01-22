import axios from "axios"

export function api(path) {
  const baseURL = 'https://www.googleapis.com/books/v1/volumes'

  console.log(baseURL + path)

  return axios.get(baseURL + path)
}

// TODO: make promises with wrappers




