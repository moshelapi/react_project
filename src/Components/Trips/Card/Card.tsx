import "./Card.css";
import axios from "axios";
import { Card } from "../../../interface/Interface";
import { Link, useNavigate } from 'react-router-dom';
import  { useContext} from 'react';
import { AllTripsData } from "../Data";


export default function CardTrip({ card }: { card: Card }): JSX.Element{

  const { setData } = useContext(AllTripsData);
    const storedToken = localStorage.getItem("token");
    const options = {
    headers: { authorization : storedToken,}
  };

  const handleDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.stopPropagation()
    axios.delete(`http://localhost:3000/api/trips/${card.id}`,options)
    setData(prevData => prevData?.filter(item => item.id !== card.id));
    }
    

    const Navigate = useNavigate();
  
    const handleClick = () => {
      Navigate(`/details/${card.id}`);
    };
  return (
 
    <div onClick={handleClick} className="card">
      <img src={card.image} alt="" />
      <p>{card.name}</p>
      <p>{card.destination}</p>
      <p>{card.startDate}</p>
      <p>{card.endDate}</p>
      <button><Link className="linkk" onClick={(e)=>e.stopPropagation()} to={`/update/${card.id}`}>Update </Link></button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
