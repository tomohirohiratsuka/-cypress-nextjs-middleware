import fetchAdapter from '@vespaiach/axios-fetch-adapter';
import { AxiosRequestHeaders } from 'axios';
import { NextRequest } from 'next/server';

import Repository from '@repositories/Repository';

const createServerSideHeader = (req: NextRequest): AxiosRequestHeaders => ({
  Cookie: req.headers.get('Cookie') || '',
});

const AuthenticatedMiddleware = async (request: NextRequest): Promise<boolean> => {
  Repository.defaults.adapter = fetchAdapter;
  const headers = createServerSideHeader(request)
  try {
    const { data: res } = await Repository.get('is-authorized', {headers});
    return res.authorized;
  } catch (e) {
    console.log(e)
    return false;
  }
};

export default AuthenticatedMiddleware;
