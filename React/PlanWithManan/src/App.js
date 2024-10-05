import logo from './logo.svg';
import './App.css';
// import data from './data';
import {useState} from 'react'
import Tours from './components/Tours';
function App() {
  let data=[
    {
        id: 1,
        place:'agra',
        name:'this is agra',
        image:'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/09/Best-time-to-visit-Agra-3.jpg',
        price:"35,000",
        info:"lajdkljalkdjalkjdlkjakdjakjdlkjalkdjalkjdklajdlkjlakdjkjadslkj"
    },
    {
        id: 2,
        place:'mumbai',
        name:'this is mumbai',
        image:'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/09/Best-time-to-visit-Agra-3.jpg',
        price:"35,000",
         info:"lajdkljalkdjalkjdlkjakdjakjdlkjalkdjalkjdklajdlkjlakdjkjadslkj"
    },
    {
        id: 3,
        place:'delhi',
        name:'this is goa',
        image:'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/09/Best-time-to-visit-Agra-3.jpg',
        price:"35,000",
         info:"lajdkljalkdjalkjdlkjakdjakjdlkjalkdjalkjdklajdlkjlakdjkjadslkj"
    }
    
    
];
  const [tour,setTour]=useState(data);
 function display(id){
  let update=tour.filter((t)=>t.id!=id);
  setTour(update);
 }
 if(tour.length==0){
  return(
  <button onClick={()=>setTour(data)}>Refresh</button>
  )
    
}
  return (
    <div className="App">
      <h2>Plan Tours</h2>
      <Tours tours={tour} display={display}/>
    </div>
  );
}

export default App;
