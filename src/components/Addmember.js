

/* export default function Addmember(){

const [name,setName] = useState("");
const [age,setAge] = useState("");
const [gender,setGender] = useState("");
const [ContactNumber,setContactNumber] = useState("");
const [RegNum,setRegNum] = useState("");

function sendData(e){
e.preventDefault();
 
 const newMember ={
     name,
     age,
     gender,
     ContactNumber,
     RegNum
 }
 axios.post("http://Localhost:3000/member/add",newMember).then(()=>{
     alert("Member Added")

     setName("");
     setAge("");
     setGender("");
     setContactNumber("");
     setRegNum("")

 }).catch((err)=>{
     alert(err)
 })

}





    return(
        <div className="container" id="all">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="name">Member Name :
                    <input type="text" className="form-control" id="name" placeholder="Enter Member Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}/></label>
                </div>

                 <div className="form-group">
                    <label for="age">Member Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Your age"
                     
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                    <label for="ContactNumber">Contact Number</label>
                    <input type="text" className="form-control" id="ContactNumber" placeholder="Enter Your contact number"
                     
                    onChange={(e)=>{
                        setContactNumber(e.target.value);
                    }}/>
                </div>
              

                  <div className="form-group">
                    <label for="gender"> Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Your gender"
                     
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}/>
                </div>
                  <div className="form-group">
                    <label for="RegNum">Registration Number</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Your registration number"
                     
                    onChange={(e)=>{
                        setRegNum(e.target.value);
                    }}/>
                </div><br/>
            
            
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}
*/

import React,{Component} from 'react';
import axios from 'axios'

export default  class Addmember extends Component {

  
       
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeContactNum = this.onChangeContactNum.bind(this);
        this.onChangeRegNum = this.onChangeRegNum.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            age:'',
            gender:'',
            ContactNumber:'',
            RegNum:''

        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e){
        this.setState({
            age: e.target.value
        });
    }

    onChangeGender(e){
        this.setState({
            gender: e.target.value
        });
    }

    onChangeContactNum(e){
            this.setState({
                ContactNumber: e.target.value
            });
        }

        onChangeRegNum(e){
            this.setState({
                RegNum: e.target.value
            });
        }

        onSubmit(e){
            e.preventDefault();

            console.log(`Form submitted:`);
            console.log(`member Name : ${this.state.name}`);
            console.log(`member Age: ${this.state.age}`);
            console.log(`member Gender: ${this.state.gender}`);
            console.log(`member ContactNumber: ${this.state.ContactNumber}`);
            console.log(`member RegNum: ${this.state.RegNum}`);

            const newMember={
                name:this.state.name,
                age:this.state.age,
                gender:this.state.gender,
                ContactNumber:this.state.ContactNumber,
                RegNum: this.state.RegNum
            }
            axios.post('http://Localhost:1000/member/add', newMember)
            .then(res => console.log(res.data));

            this.setState({
                name:'',
                age:'',
                gender:'',
                ContactNumber:'',
                RegNum:''
            })

        }

        render(){
            return(
                <div style={{marginTop: 30, alignItems: 'center'}}>
                <h3>Add New Member</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name : </label>
                        <span><input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                placeholder="Enter Your Name"
                                /></span>
                    </div>
                    <div className="form-group">
                        <label>Age : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                                placeholder="Enter Your Age"
                                />
                    </div>
                    <div className="form-group">
                        <label>Gender : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.gender}
                                onChange={this.onChangeGender}
                                placeholder="Enter Your Gender"
                                />
                    </div>
                    <div className="form-group">
                        <label>ContactNumber : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ContactNumber}
                                onChange={this.onChangeContactNum}
                                placeholder="Enter your Number"
                                />
                    </div>
                    <div className="form-group">
                        <label>RegNum : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.RegNum}
                                onChange={this.onChangeRegNum}
                                placeholder="Enter Your Registration Number"
                                />
                    </div>
                    
                        
                    <br/>
                    <div className="form-group">
                   <input type="submit" value="Submit" className="btn btn-primary" position="relative" />
                    </div>
                </form>
            </div>
        )
    }
} 

    
