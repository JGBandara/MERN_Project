import React, {Component} from 'react';
import axios from 'axios';

export default class EditDetails extends Component {

    constructor(props) {
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

    componentDidMount() {
        axios.get('http://Localhost:3000/member/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeContactNum(e) {
        this.setState({
           ContactNumber: !this.state.ContactNumber
        });
    }
    onChangeRegNum(e) {
        this.setState({
           RegNum: !this.state.RegNum
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            ContactNumber: this.state.ContactNumber,
            RegNum: this.state.RegNum
        };
        axios.post('http://Localhost:3000/member/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Edit Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>age : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                                />
                    </div>
                    
                    <div className="form-group">
                        <label>gender : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.gender}
                                onChange={this.onChangeGender}
                                />
                    </div>
                    
                    <div className="form-group">
                        <label>ContactNumber : </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.ContactNumber}
                                onChange={this.onChangeContactNum}
                                />
                    </div>
                    <div className="form-group">
                        <label>RegNum: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.RegNum}
                                onChange={this.onChangeRegNum}
                                />
                    </div>
                    
                
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-primary" />
                        </div>
                    
                </form>
            </div>
        )
    }
}