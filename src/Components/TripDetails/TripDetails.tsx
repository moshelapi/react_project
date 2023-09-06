import { Vacation } from '../../interface/Interface';
import {useParams} from 'react-router-dom'
import { useEffect,useState } from "react";
import axios from 'axios'
import './TripDetais.css'
import{Link} from 'react-router-dom'

export default function TripDetails():JSX.Element{
    const {id} = useParams()
    const [data, setData] = useState<Vacation|undefined>(undefined);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
           ` http://localhost:3000/api/trips/${id}`
          );
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
    console.log(data);
    return(
        < div  className="container">
        <Link className="link" to="/all">
        Show All Trips
      </Link>
        <div className="tripDetails">
        <img src={data?.image} alt="" />
      <p>name: {data?.name}</p>
      <p>destination: {data?.destination}</p>
      <p>startDate: {data?.startDate}</p>
      <p>endDate: {data?.endDate}</p>
      <p>description: {data?.description}</p>
      <p>price: {data?.price}</p>
      <p>description: {data?.description}</p>
      <ol>
      activities:
      <li>{data?.activities[0]}</li>
      <li>{data?.activities[1]}</li>
      <li>{data?.activities[2]}</li>

      </ol>


        </div>
        </div>
    )
}


