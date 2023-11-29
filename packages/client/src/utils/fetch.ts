import { NETWORK_CONNECT_ERROR } from './constant';
import notices from './notices';

export const fetchData = async (
  input: RequestInfo,
  init?: RequestInit | undefined
) => {
  return fetch(input, init).catch(() => {
    notices.error(NETWORK_CONNECT_ERROR);
    throw new Error(NETWORK_CONNECT_ERROR);
  });
};
