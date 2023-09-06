import { Link } from 'react-router-dom';
import './Home.css'

export default function Home(): JSX.Element {
  return (
    <div className="appp">
      <Link className='ll' to="/all">
        Show All Trips
      </Link>
      <Link className='ll' to="/register" >
        Sing In
      </Link>
      <Link className='ll' to="/log-in" >
        Log In
      </Link>
    </div>
  );
}
