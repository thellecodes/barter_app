import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  API_URI,
  REG_LOADING,
  LOG_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
} from './types';
import {CLEAR_ERRORS} from './types';
import {returnErrors} from './errActions';

export const register = (newUser) => async (dispatch) => {};

//** Amazon Load User */
export const loadUser = () => async (dispatch) => {};
