import { ADD_USER, REMOVE_USER } from './userTypes'

export const addUser = (email: string | null = '') => {
  return {
    type: ADD_USER,
    payload: email
  }
}

export const removeUser = () => {
  return {
    type: REMOVE_USER
  }
}