import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action,comedy,horror, trending } from './Urls';

function App() {
  return (
    <div className="App">
    
     <NavBar/>
     <Banner/>
     <RowPost url={trending} title='Netflix orginals'/>
     <RowPost url={action} title='Action movies' isSmall/>
     <RowPost url={comedy} title='ComedyMovies' isSmall/>
     <RowPost url={horror} title='HorrorMovies' isSmall/>
    </div>
  );
}

export default App;
