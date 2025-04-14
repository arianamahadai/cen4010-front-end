export default function Home() {
  return (
    <main className="text-center mt-20">
      <h1 className="text-4xl font-bold">Welcome to SkyCast</h1>
      <p className="mt-4 text-gray-600">Check your weather forecast with style.</p>
      <a href="/login" className="mt-6 inline-block text-blue-600 hover:underline">
        Go to Login
      </a>
    </main>
  );
}
import Weather from './components/Weather';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Weather />
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { fetchWeather } from '../lib/fetchWeather';

export default function Weather() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const city = 'Orlando'; // or dynamically set

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city, unit);
        setWeather(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [unit]);

  return (
    <div className="p-4 rounded-xl shadow-xl max-w-md bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Current Weather</h2>
        <button
          onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
          className="text-sm text-blue-500 hover:underline"
        >
          Toggle to {unit === 'metric' ? '°F' : '°C'}
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : weather ? (
        <div className="mt-4">
          <p className="text-lg">{weather.name}</p>
          <p className="text-2xl font-bold">
            {Math.round(weather.main.temp)}° {unit === 'metric' ? 'C' : 'F'}
          </p>
          <p>{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Weather info not available</p>
      )}
    </div>
  );
}
