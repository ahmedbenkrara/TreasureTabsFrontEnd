import { BACKEND_ENDPOINT } from "../config/endpoints"
import axios from "axios"

export const refreshToken = async () => {
  try {
    await axios.post(`${BACKEND_ENDPOINT}/auth/refreshToken`, {
      withCredentials: true,
    })

    const userRes = await user()

    return userRes
  } catch (err) {
    return {
      status: 'failed',
      user: null,
    }
  }
}

const user = async () => {
    try {
      const res = await axios.get(`${BACKEND_ENDPOINT}/auth/user`, {
        withCredentials: true,
      });

      return {
        status: 'success',
        user: res.data.data,
      };
    } catch (err) {
      return {
        status: 'failed',
        user: null,
      };
    }
  };