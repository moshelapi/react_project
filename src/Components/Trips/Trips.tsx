import CardTrip from "./Card/Card";
import "./Trips.css";
import  { useContext} from 'react';
import { AllTripsData } from "./Data";
import { Link } from 'react-router-dom';

export default function Trips(): JSX.Element {
  const { data } = useContext(AllTripsData);

  return (
   
    <div className="container">
      <div className="nav">
        <Link className="link" to={'/'}>home page</Link>
        <Link className="link" to={'/newTrip'}>New Trip</Link>

      </div>
      <div className="main">
        {data?.map((obj) => (
          <CardTrip key={obj.id} card={obj} />
        ))}
      </div>
    </div>
    
  );
}
