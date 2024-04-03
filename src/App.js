import lightimg from './images/lighting.jpg';
import FaucetImg from './images/faucets.jpg';
import HeadImg from './images/headlights.jpg';
import TripodImg from './images/tripods.jpg';
import Directory from './components/directory/directory.component';


const App = () =>{
  const categories= [
    {
      "id": 1,
      "title": "lighting",
      "imageUrl":lightimg
    },
    {
      "id": 2,
      "title": "faucets",
      "imageUrl": FaucetImg
    },
    {
      "id": 3,
      "title": "headlights",
      "imageUrl": HeadImg
    },
    {
      "id": 4,
      "title": "tripods",
      "imageUrl": TripodImg
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  ;
  return (
    <Directory categories={categories}/>
  );
}

export default App;
