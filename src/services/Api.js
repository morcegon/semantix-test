import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://private-afe609-testefront.apiary-mock.com',
});

function responseSucess(data) {
  return {
    sucess: true,
    data,
  };
}

async function chartInfo(uri) {
  try {
    const resp = await instance.get(`/${uri}`);
    return responseSucess(resp.data);
  } catch (e) {
    return e.response;
  }
}

export { instance, chartInfo };
