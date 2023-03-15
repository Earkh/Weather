import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import CurrentWeather from './weather/CurrentWeather';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <CurrentWeather></CurrentWeather>
    </QueryClientProvider>
  )
}

export default App
