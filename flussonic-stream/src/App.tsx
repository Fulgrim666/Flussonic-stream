import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import  NewStreamComponent  from './components/StreamCreation/NewStreamComponent';
import StreamsComponent from './components/StreamsList/StreamsComponent';


function App(): JSX.Element {

  return (
    <BrowserRouter>  
      <>
        <NavbarComponent />  
        <Routes>   
          <Route path="/streamsComponent" element={<StreamsComponent />} />
          <Route path='/newStreamComponent' element={<NewStreamComponent/>}/> 
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;