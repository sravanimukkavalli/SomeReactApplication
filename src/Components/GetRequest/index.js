import { Component } from "react";
import './index.css'

class GetRequest extends Component {
    state = {requestData: []}

    componentDidMount() {
        this.getData()
    }

     getData =async () => {
        const url="https://gorest.co.in/public/v1/todos";
        const options = {
            method: "Get"
        }
        const response = await fetch(url,options);
        const data = await response.json();
        const updateData =data.data.map((eachData) =>  ({
            dueOn: eachData.due_on,
            id: eachData.id,
            status : eachData.status,
            title:eachData.title,
            userId:eachData.user_id

        }))
        this.setState({requestData: updateData})
     }


    render(){
        const {requestData} = this.state
        console.log(requestData)
        return (
            <div className="container">
                <ul className="data-container">
                    {requestData.map((each) => {
                        const {dueOn,status,id,userId,title} = each
                        return (
                        <li key={id} className="each-item">
                                <p>{dueOn}</p>
                                <p>{status}</p>
                                <p>{title}</p>
                                <p>{userId}</p>
                        </li>
                    )})}           
                </ul>
            </div>
        )
    }
}
export default GetRequest