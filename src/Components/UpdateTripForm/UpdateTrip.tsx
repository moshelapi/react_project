import { useState,useEffect,useContext } from "react";
import { Vacation } from "../../interface/Interface";
import { Link, useParams,useNavigate } from "react-router-dom"; 
import { AllTripsData } from "../Trips/Data";
import axios from "axios";
import './UpdateTrip.css'


export default function UpdateTrip(): JSX.Element|undefined{
    const {id} = useParams()
    const  {data:tripData, setData } = useContext(AllTripsData);
    const [data, setTrip] = useState<Vacation|undefined>(undefined);
    const Navigate = useNavigate()
    const storedToken = localStorage.getItem("token")
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
           ` http://localhost:3000/api/trips/${id}`
          );
          setTrip(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
  const options = {
    headers: { authorization : storedToken,}
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
axios.put(`http://localhost:3000/api/trips/${id}`,data,options)
const updatedTrips = tripData?.filter((trip) => (trip.id )!== id);
updatedTrips?.push(data);
setData(updatedTrips);
Navigate(-1)


     
;}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTrip((prevData:any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Link className="link" to="/all">
        Show All Trips
      </Link>
      <h1 className="h1">Update trip</h1>
      <form className="form-container" onSubmit={handleSubmit}>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={data?.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={data?.destination}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="text"
            name="startDate"
            value={data?.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="text"
            name="endDate"
            value={data?.endDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={data?.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={data?.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={data?.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
