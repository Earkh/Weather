import { useQuery } from '@tanstack/react-query';
import fetchForecast from '../../api/fetchForecast';

const Forecast = () => {
  const { isLoading, data } = useQuery({
    queryKey: [
      'forecast',
      { lat: '28.980290142525288', lon: '-13.570824386223514' }
    ],
    queryFn: fetchForecast
  });

  if (isLoading) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
  const list = data.list.filter((report: any) =>
    report.dt_txt.endsWith('12:00:00')
  );

  return (
    <div className="pl-8 pr-6">
      {list.map((report: any) => {
        return (
          <div className="flex items-center justify-between">
            <p>
              {new Date(report.dt * 1000).toLocaleString('en-GB', {
                weekday: 'long',
                day: 'numeric'
              })}
            </p>
            <p className="flex items-center">
              {Math.round(report.main.temp)}°C{' '}
              <img
                src={`https://openweathermap.org/img/wn/${report.weather[0].icon}.png`}
                alt=""
              />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
