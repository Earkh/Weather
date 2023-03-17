import {QueryFunctionContext} from "@tanstack/react-query";

type Params = {
  appid: string,
  lat: string,
  lon: string,
  units: string
}

const fetchForecast = async ({ queryKey }: QueryFunctionContext<[string, {lat: string, lon: string}]>) => {
  const {lat, lon} = queryKey[1];
  const url = new URL(import.meta.env.VITE_OPEN_FORECAST_API_URL);
  const params: Params = {
    appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
    lat,
    lon,
    units: 'metric'
  };
  url.search = new URLSearchParams(params).toString();
  const apiRes = await fetch(url);

  if (!apiRes.ok) {
    throw new Error(`forecast fetch not ok`);
  }

  return apiRes.json();
};

export default fetchForecast;