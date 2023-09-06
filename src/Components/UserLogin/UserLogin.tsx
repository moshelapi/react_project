import  { useState } from "react";
import { UserRegistration } from "../../interface/Interface";
import axios from "axios";
import './UserLogin.css'
import { useNavigate } from "react-router-dom";

export default function UserLogIn():JSX.Element|any{
    const Navigate = useNavigate()
  const [user, setUser] = useState<UserRegistration>({
    email:'',
    password:''
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });};

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login",user)

      if (response.data.responseObj.token) {
        localStorage.setItem("token", response.data.responseObj.token)
        setMessage("Login successful!");
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error){ throw error}
     
      Navigate(-1)
    }
  

  return (
    <div  className="divvv">
      <h1 className="h1111">Login</h1>
      <form  className='jjijij'onSubmit={handleSubmit}>
        <div className="jlijlnl">
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="ljnl">
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button  className="nlnlnlk" type="submit">Login</button>
      </form>
      <p className="kbkjbj">{message}</p>
    </div>
  );}
