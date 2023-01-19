import fetchAdapter from '@vespaiach/axios-fetch-adapter';

import Repository from '@repositories/Repository';


const AuthenticatedMiddleware = async (): Promise<boolean> => {
  Repository.defaults.adapter = fetchAdapter;
  try {
    const { data: res } = await Repository.get('auth/me');
    return res.status;
  } catch (e) {
    console.log(e)
    return false;
  }
};

export default AuthenticatedMiddleware;
