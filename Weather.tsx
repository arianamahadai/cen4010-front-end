'use client';

import { useState } from 'react';
import { fetchWeather } from '../lib/fetchWeather';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city, 'imperial'); // or 'metric'
      setWeather(data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded">
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {weather && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
