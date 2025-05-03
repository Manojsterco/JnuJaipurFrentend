
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
// import './App.css';
import '../src/css/style.css';

import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
     </BrowserRouter>
     <Banner/>
    </div>
  );
}

export default App;
