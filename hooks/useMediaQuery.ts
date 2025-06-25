"use client";

import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking the state of a media query.
 * @param query - The media query string to match (e.g., '(max-width: 768px)').
 * @returns `true` if the media query matches, otherwise `false`.
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Ensure window is defined (for server-side rendering)
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Set the initial state
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      // Listener for changes
      const listener = () => {
        setMatches(media.matches);
      };

      // Add listener
      media.addEventListener('change', listener);

      // Cleanup listener on component unmount
      return () => media.removeEventListener('change', listener);
    }
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
