import { createContext, useState } from 'react';

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]); // Array of hotel data

  return (
    <HotelContext.Provider value={{ hotels, setHotels }}>
      {children}
    </HotelContext.Provider>
  );
};
