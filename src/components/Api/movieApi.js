import { create } from 'apisauce';
import useSettings from '../../hooks/useSettings';

export function useMovieApi(){
  const { baseUrl } = useSettings();
  const api = create({
    baseURL: baseUrl,
    headers: { Accept: 'application/json' },
  });

  return {
    api
  }
}
