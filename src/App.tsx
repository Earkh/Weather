import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CurrentWeather from './weather/CurrentWather/CurrentWeather';
import Forecast from './weather/Forecast/Forecast';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <form className="py-4 px-8">
        <input type="text" id="location" placeholder="Location" required />
      </form>
      <CurrentWeather />
      <Forecast />
    </QueryClientProvider>
  );
}

export default App;
