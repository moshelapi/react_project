import { Card } from "../../interface/Interface";
import { useState, createContext, useEffect, ReactNode } from "react"; 
import axios from "axios";

interface AllTripsProps {
  children: ReactNode;
}

const AllTripsData = createContext<{
  data: Card[] | undefined;
  setData: React.Dispatch<React.SetStateAction<Card[] | undefined>>;
}>({ data: undefined, setData: () => {} });

function AllTrips({ children }: AllTripsProps): JSX.Element {
  const [data, setData] = useState<Card[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Card[]>(
          "http://localhost:3000/api/trips"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <AllTripsData.Provider value={{ data, setData }}>
      {children}
    </AllTripsData.Provider>
  );
}

export { AllTrips, AllTripsData };
