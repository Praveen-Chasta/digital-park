import { useEffect } from 'react';
import { createBrowserHistory } from 'history';

const useBlockNavigation = () => {
  useEffect(() => {
    const history = createBrowserHistory();
    
    // Listen for history changes and block them
    const unblock = history.block((tx) => {
      window.history.pushState(null, "", window.location.href);
      // Prevent navigation
      return false;
    });

    // Push a new state to override the back/forward history
    window.history.pushState(null, "", window.location.href);

    // Handle the popstate event
    const handlePopState = (event) => {
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      unblock();
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
};

export default useBlockNavigation;
