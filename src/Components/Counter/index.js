import {Component} from 'react';
import {AiOutlinePlusSquare,AiOutlineMinusSquare} from "react-icons/ai"
import './index.css';

class Counter extends Component {
    state={count: 42}
   
     onClickIncrement = () => {
            this.setState(prevState => ({count: prevState.count + 1}))
    }

    onClickDecrement = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }

    render(){
        const {count} = this.state
        return(
                <div className='bg-container'>
                    <div className='card-container'>
                        <h1>Counter</h1>
                        <div className='items-container'>
                            <AiOutlinePlusSquare className='count-align' onClick={this.onClickIncrement} />
                            <h1 className='count-align'>{count}</h1>
                            <AiOutlineMinusSquare className='count-align' onClick={this.onClickDecrement} />
                        </div>
                    </div>
                </div>
        )
    }
}
export default Counter
