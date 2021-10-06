import './App.css';
import Header from './components/Header';
import Addmember  from './components/Addmember'
import AllMember from './components/AllMember';
import DeleteMember from './components/DeleteMember';
import EditDetails from './components/EditDetails';
import {BrowserRouter as Router,Route} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div >
      <div id="header">
      <Header/></div>
      <div id="all">
      <Route path="/add" exact component={Addmember} />  
      <Route path="/delete" exact componet={DeleteMember}/>  
      <Route path="/" exact component={AllMember}/> 
      <Route path="/edit" exact component={EditDetails}/>
      </div> 
     
    </div>
    </Router>
  );
}

export default App;
