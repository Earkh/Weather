import { useQuery } from '@tanstack/react-query';
import fetchWeather from '../../api/fetchWeather';
import CurrentWeatherIcon from './CurrentWeatherIcon';
import CurrentWeatherStats from './CurrentWeatherStats';

const CurrentWeather = () => {
  const { isLoading, data } = useQuery({
    queryKey: [
      'weather',
      { lat: '28.980290142525288', lon: '-13.570824386223514' }
    ],
    queryFn: fetchWeather
  });

  if (isLoading) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <div className="m-0 p-4 px-8 pt-4">
      <div className="flex flex-col">
        <h2 className="text-center text-2xl">{data.name}</h2>
        <h1 className="text-center text-6xl">{Math.round(data.main.temp)}°C</h1>
        <h3 className="text-md  mb-8 text-center">
          min {Math.round(data.main.temp_min)}°C max{' '}
          {Math.round(data.main.temp_max)}°C
        </h3>
        <CurrentWeatherIcon
          imageName={`${data.weather[0].main.trim().toLowerCase()}${
            data.weather[0].icon[2]
          }`}
          description={data.weather[0].description}
        />
        <CurrentWeatherStats
          humidity={data.main.humidity}
          wind={data.wind}
          sunrise={data.sys.sunrise}
          sunset={data.sys.sunset}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
