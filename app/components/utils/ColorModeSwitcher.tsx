'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ColorModeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme after component mounts
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved ? JSON.parse(saved) : prefersDark;
    
    // Batch state updates
    const updateTheme = () => {
      setIsDark(shouldBeDark);
      setMounted(true);
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    // Use requestAnimationFrame to avoid synchronous state update in effect
    requestAnimationFrame(updateTheme);
  }, []);

  const toggleColorMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Color mode toggle"
      >
        <FaMoon className="text-xl" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleColorMode}
      className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <FaSun className="text-xl text-yellow-400" />
      ) : (
        <FaMoon className="text-xl text-gray-600" />
      )}
    </button>
  );
}