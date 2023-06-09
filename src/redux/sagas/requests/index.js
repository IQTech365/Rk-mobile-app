import Axios from '../../../lib/Axios';
import * as ENDPOINTS from '../../../constants/endpoints';
import {LOCAL_STORAGE_CONSTANTS} from '../../../constants/index';

export function handleFileUpload(file) {
  const formData = new FormData();
  formData.append('files', file);
  return Axios.post(ENDPOINTS.UPLOAD_FILE, formData, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
}

export function handleSignin(values) {
  return Axios.post(ENDPOINTS.AUTH_SIGNIN, values);
}

export function handleSignup(values) {
  return Axios.post(ENDPOINTS.AUTH_SIGNUP, values);
}

export function handleFetchSession(token) {
  return Axios.post(ENDPOINTS.AUTH_SESSION, null, {
    headers: {
      Authorization: token,
    },
  });
}
