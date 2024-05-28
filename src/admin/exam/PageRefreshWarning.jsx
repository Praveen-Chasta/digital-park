import React from 'react';

const PageRefreshWarning = () => {
    // Function to handle beforeunload event
    const handleBeforeUnload = (event) => {
        // Cancel the event
        event.preventDefault();
        // Chrome requires returnValue to be set
        event.returnValue = '';
    };

    // Attach event listener when the component mounts
    React.useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []); // Empty dependency array ensures this runs only on mount

    return null; // Return null as this component does not render anything visible
};

export default PageRefreshWarning;
