import {useQuery} from "@tanstack/react-query";
import fetchWeather from "../api/fetchWeather";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import CurrentWeatherStats from "./CurrentWeatherStats";

const CurrentWeather = () => {

  const {isLoading, data} = useQuery({
    queryKey: ['weather', {lat: '28.980290142525288', lon: '-13.570824386223514'}],
    queryFn: fetchWeather,
  });

  if (isLoading) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
  console.log(data);

  return (
    <div className="w-screen h-screen p-6">
      <div className="flex flex-col">
        <h2 className="text-2xl text-center">{data.name}</h2>
        <h1 className="text-6xl text-center">{Math.ceil(data.main.temp)}°C</h1>
        <h3 className="text-md  text-center mb-8">min {Math.ceil(data.main.temp_min)}°C
          max {Math.ceil(data.main.temp_max)}°C</h3>
        <CurrentWeatherIcon
          imageName={`${data.weather[0].main.trim().toLowerCase()}${data.weather[0].icon[2]}`}
          description={data.weather[0].description}
        />
        <CurrentWeatherStats
          humidity={data.main.humidity}
          pressure={data.main.pressure}
          sunrise={data.sys.sunrise}
          sunset={data.sys.sunset}
        />
      </div>
    </div>
  )
};

export default CurrentWeather;