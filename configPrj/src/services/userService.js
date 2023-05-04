import { axios, localhost } from '../other/utils/axios/axios'

export const getCodeForRegister = (body) => axios.post(`${localhost}/getCodeForRegister`, body)