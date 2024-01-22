import settings from '../config/settings.json';

export default function useSettings(){
  const baseUrl = process.env.NODE_ENV === "development"? 
                  settings.local_base_url: 
                  settings.production_base_url;
  const constants = {
    errorTimer: 7000,
    desc: "Plot",
    errors: {
      nomovie: "No movie to show!",
    }
  }
  return {
    baseUrl: baseUrl,
    constants
  }
}