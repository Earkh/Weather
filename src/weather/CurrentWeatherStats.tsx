import {FC} from 'react';

interface Props {
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number
}

const CurrentWeatherStats: FC<Props> = ({humidity, pressure, sunrise, sunset}) => {

  const sunriseHour = new Date(sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunsetHour = new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  console.log(sunriseHour, sunsetHour);


  return (
    <div className="flex flex-col my-8">
      <div className="flex justify-around">
        <p className="text-center">💧 {humidity}%</p>
        <p className="text-center">️{pressure}hPa ↕️</p>
      </div>
      <div className="flex justify-around">
        <p className="text-center">🌅 {sunriseHour}</p>
        <p className="text-center">{sunsetHour} 🌇</p>
      </div>
    </div>
  );
};

export default CurrentWeatherStats;