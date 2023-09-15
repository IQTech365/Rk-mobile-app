import {AxiosResponse} from 'axios';
import {Api} from '../http/Api';
import { QR_READ } from '../http/Endpoint';

// **** QR  Api's ****

export const fetchQRimage = async (): Promise<any> => {
  const api = Api.getInstance();
  return await api.get<any>(QR_READ);
};
