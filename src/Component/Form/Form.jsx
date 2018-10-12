import React, {Component} from 'react';
import './Form.css'

export default class Form extends Component {
    constructor(){
        super();
        this.state ={
            image: '',
            productName: '',
            price: 0
        }
    }

    imageChange = (val)=>{
        console.log(val)
        console.log(this.state.image)
        this.setState({
            image: val
        })
    }

    productNameChange = (val)=>{
        this.setState({
            productName: val
        })
    }
    priceChange = (val)=>{
        this.setState({
            price: val
        })
    }

    clear = ()=>{
        this.setState({
            image: '',
            productName: '',
            price: 0
        })
        console.log(this.state)
    }

    render(){
        return(
            <div className='form'>
                <div className="formbox">
                    <div className='picture'>
                        <input className='imgIn' type="image"/>
                    </div>
                    <div className='inputs'>
                    <p>Image URL:</p>
                    <input value={this.state.image} onChange={e=>this.imageChange(e.target.value)} type="text"></input>
                    <p>Product Name:</p>
                    <input value={this.state.productName} onChange={e=>this.productNameChange(e.target.value)} type="text"></input>
                    <p>Price:</p>
                    <input value={this.state.price} onChange={e=>this.priceChange(e.target.value)} placeholder='0' type="number"></input>
                    <div className='buttondiv'>
                        <button onClick={this.clear}>Cancel</button><button className='rightbtn'>Add to Inventory</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}