import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserRegistration } from "../../interface/Interface";
import './UserSing-in.css'

export default function SingInForm() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
    const [NewUser, setNewUser] = useState<UserRegistration >({
    email: "",
    password: "",
    role: "admin"
});
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...NewUser, [name]: value });
};


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",NewUser,
        {
          headers: {
            authorization: "test-token",
          },
        }
      );
      console.log(response);
    } catch (error) {

      setMessage("Registration failed. Please try again.");
    }
    navigate(-1)
  };

  return (
    <div className="cont">
      <h2 className="h2">Registration Form</h2>
      <form className="formm" onSubmit={handleSubmit}>
        <div className="div2">
          <label >Email:</label>
          <input
            name="email"
            type="email"
            value={NewUser.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="div3">
          <label >Password:</label>
          <input
            name="password"
            type="password"
            value={NewUser.password}
            onChange={handleChange}
            required
          />
        </div>
        <button  className="buttonn" type="submit">Sing In</button>
      </form>
      <p className="pp">{message}</p>
    </div>
  );
}
