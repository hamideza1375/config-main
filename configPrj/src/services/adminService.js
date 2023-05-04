import { axios, localhost } from '../other/utils/axios/axios'

export const createCategory = (id, body) => axios.postData(`${localhost}/createCategory/${id}`, body)