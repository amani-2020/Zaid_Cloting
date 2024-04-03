import {Routes, Route} from 'react-router-dom'
import Home from "./routes/home/home.component";

const Shop = () =>{
return (
  <div>Shopppppppppppppppp</div>
);
}

const App = () =>{
  
  return (
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/shop' element={ <Shop />}/>
    </Routes>
   
  );
}

export default App;
