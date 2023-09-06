import { AllTrips } from './Components/Trips/Data'
import './app.css'
import MyRouter from './Components/Router/Router'


function App():JSX.Element{

  return (
    
    <div className="app">
      <AllTrips>
      <MyRouter/>
      </AllTrips>
    </div>
  )
}
 


export default App
