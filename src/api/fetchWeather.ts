import {QueryFunctionContext} from '@tanstack/react-query';

type Params = {
    appid: string,
    lat: string,
    lon: string,
    units: string
}

const fetchWeather = async ({ queryKey }: QueryFunctionContext<[string, {lat: string, lon: string}]>) => {
    const location = queryKey[1];
    console.log(location);
    const url = new URL(import.meta.env.VITE_OPEN_WEATHER_API_URL);
    const params: Params = {
        appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        lat: '28.980290142525288',
        lon: '-13.570824386223514',
        units: 'metric'
    };
    url.search = new URLSearchParams(params).toString();
    const apiRes = await fetch(url);

    if (!apiRes.ok) {
        throw new Error(`weather fetch not ok`);
    }

    return apiRes.json();
};

export default fetchWeather;
