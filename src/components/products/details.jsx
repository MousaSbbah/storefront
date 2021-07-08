import React,{useEffect} from 'react'
import {connect } from 'react-redux';
import { getDetails ,getProducts  } from '../../store/product';
import { addToCart } from '../../store/cart';
import { Typography ,Button } from '@material-ui/core';
const Details = (props) => {
    useEffect(() => {
        
            getProducts();
    }, [])

    return (
        <div style={{width:'60%',margin:'auto'}}>
            <Typography>
                <h1>{props.state.name}</h1>

                <h2>{props.state.category}</h2>

                <h2>Price : {props.state.price}</h2>
                <h2>inStock : {props.state.inStock}</h2>
                <p>Description : {(props.state.description)?props.state.description : 'Description not found for this product'}</p>

            </Typography>

            <Button onClick={()=>{
                props.addToCart(props.state);
            }} variant='contained' color='primary'>
                Buy

            </Button>

        </div>
    )
}
const mapStateToProps = (state) => ({
    cart: state.cart,
    state:state.products.details
  });
  const mapDispatchToProps = { getDetails,addToCart };
  export default connect(mapStateToProps, mapDispatchToProps)(Details);

