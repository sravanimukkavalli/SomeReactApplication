import { Component } from "react";
import './index.css'

class PostMethod extends Component {

    state={email:'',msg:'',name: ''}

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    onChangeMsg = (e) => {
        this.setState({msg: e.target.value})
    }

    onChangeName = (e) => {
        this.setState({name:e.target.value})
    }

    onSubmitEvent = async(e) => {
        e.preventDefault();
        const {email,name,msg} = this.state;
        const data = {
            "email": email,
            "message": msg,
            "name": name
        }
        const options ={
            method: 'Post',
            headers : {
                "Content-Type" :'application/json',
                "Accept" : 'application/json',
            },
            body: JSON.stringify(data)
        }
        const url="https://admin.srkprojects.com/web/api/client/v1/contact-us/";
        const response = await fetch(url,options)
        const output = await response.json();
        console.log(response)
        console.log(output)
    }

    render(){
        const {name,msg,email} = this.state
        return (
            <div className="post-container">
             <form onSubmit={this.onSubmitEvent} className="each-post">
                <div className="mt-3">
                    <label for="EmailId">Email</label>
                    <input id="EmailId" type="email" value={email} onChange={this.onChangeEmail} />
                </div>
                <div className="mt-3">
                    <label for="MessageId">Message</label>
                    <input id="MessageId" type="text" value={msg} onChange={this.onChangeMsg} />
                </div>
                <div className="mt-3">
                    <label for="NameId">Name</label>
                    <input id="NameId" type="text" value={name} onChange={this.onChangeName} />
                </div>
                <button style={{width: "40px"}} type="submit">Add</button>
             </form>
             <div className="output-card">
                <p>Name:{name}</p>
                <p>Email: {email}</p>
                <p>Message :{msg}</p>
             </div>
            </div>
        )
    }
}
export default PostMethod