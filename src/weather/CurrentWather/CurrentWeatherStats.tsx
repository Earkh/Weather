import {FC} from 'react';

interface Props {
  humidity: number,
  wind: Wind,
  sunrise: number,
  sunset: number
}

interface Wind {
  speed: number;
  deg: number
}

const CurrentWeatherStats: FC<Props> = ({humidity, wind, sunrise, sunset}) => {

  const sunriseHour = new Date(sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  const sunsetHour = new Date(sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  return (
    <div className="flex flex-col my-8">
      <div className="flex justify-between">
        <p>💧 {humidity}%</p>
        <p>️{wind.speed}m/s 🌬️</p>
      </div>
      <div className="flex justify-between">
        <p>🌅 {sunriseHour}</p>
        <p>{sunsetHour} 🌇</p>
      </div>
    </div>
  );
};

export default CurrentWeatherStats;