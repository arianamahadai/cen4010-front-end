'use client';

import Weather from './components/Weather';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-2">Welcome to SkyCast</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Check your weather forecast with style.
      </p>
      <a href="/login" className="text-blue-600 hover:underline mb-8">
        Go to Login
      </a>

      <Weather />
    </main>
  );
}
