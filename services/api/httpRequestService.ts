import axios, { AxiosResponse } from 'axios';
import appConstants from 'constants/appConstants';

// This function is used to make GET requests to the API.
// It constructs the request URL using the base URL and the provided endpoint,
export const getApiRequest = async (url: string) => {
  const requestUri = `${appConstants.API_BASE_URL}${url}`;
  const requestConfig = {
    headers: {
      'Authorization': `Bearer ${appConstants.API_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  }
  return new Promise<AxiosResponse>((resolve, reject) => {
    axios.get(requestUri, requestConfig)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        reject(error);
      });
  })
}