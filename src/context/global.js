import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const initialState = {
    videos: [],
    loading: false,
  };

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const mediaJSON = await import('../Components/data.json');
        const videos = mediaJSON.categories.reduce((acc, category) => {
          return [...acc, ...category.videos];
        }, []);
        setVideos(videos);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchData();
  }, []);

  const [videos, setVideos] = useState(initialState.videos);

  return (
    <GlobalContext.Provider value={{ videos }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
