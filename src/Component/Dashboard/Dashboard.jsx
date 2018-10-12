import React, {Component} from 'react';
import Product from '../Product/Product.jsx'

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            
        }
    }
   
    render(){
        let mapInv = this.props.inv.map((product)=>{
            return <Product product={product} />
                        
                   
        })
        return(
            <div>
                
                {mapInv}
                {/* <Product inv={this.props.inv} /> */}
            </div>
        )
    }
}