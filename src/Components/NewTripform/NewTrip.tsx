import { useState } from "react";
import { Vacation } from "../../interface/Interface";
import { Link,useNavigate } from "react-router-dom"; 
import axios from "axios";
import './NewTrip.css';

export default function NewTrip(): JSX.Element|undefined{
  const storedToken = localStorage.getItem("token")
  const Navigate = useNavigate()
  const [vacationData, setVacationData] = useState<Vacation>({
    id: "",
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: 0,
    image: "",
    activities: [],
  });
  const options = {
    headers: { authorization : storedToken,}
  };
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {axios.post('http://localhost:3000/api/trips',vacationData,options)
    window.location.reload();}
    catch{
      window.alert("Permission Denied: You don't have access to this resource.");
    }

     
;}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVacationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Link className="link" to="/all">
        Show All Trips
      </Link>
      <h1 className="h1">New trip</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={vacationData.id}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={vacationData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={vacationData.destination}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="text"
            name="startDate"
            value={vacationData.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="text"
            name="endDate"
            value={vacationData.endDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={vacationData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={vacationData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={vacationData.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
