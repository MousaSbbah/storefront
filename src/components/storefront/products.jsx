import React ,{useEffect} from 'react';
import { connect } from 'react-redux';
import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  GridList ,
  GridListTile 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { filterProducts,getProducts,decrementInStock ,getDetails } from '../../store/product';
import { addToCart  } from '../../store/cart';
import { allList } from '../../store/categories';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 120,
  },

});

const Products = (props) => {
  const classes = useStyles();
  useEffect(()=>{
    props.getProducts();
    },[props])

    
  return (
    <GridList  cols={3} >
      {props.products.products.filter((val) => {
        return (val.category === props.category || props.category === 'all');
      }).map((val) => {
        return (
          <GridListTile rows={2}   cols={1}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.eppendorf.com/fileadmin/General/MyEppendorf/Productregistration/Update_January_2021/Shop_ICON_Final.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {val.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h3"
                  >
                    <strong>Price</strong> : {val.price} $
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h3"
                  >
                    <strong> Inventory count </strong>: {val.inStock}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>{
                  
                    let currentCart = props.cart.inCart.filter(product=>(Object.values(product).includes(val.name)))
                        if(currentCart.length === 0 && val.inStock > 0 ){

                          props.decrementInStock(val);
                          props.addToCart(val);
                        }
                  
                }}>
                  Add To Cart
                </Button>
                <Button onClick={()=>{
                  props.getDetails(val._id);
                }} size="small" color="primary">
                   <Link to={`/products/${val._id}`}>Learn More</Link>  
                </Button>
              </CardActions>
            </Card>
          </GridListTile >
        );
      })}
    </GridList >
  );
  
};

const mapStateToProps = (state) => ({
  products: state.products,
  category:state.categories.active,
  cart:state.cart
});
const mapDispatchToProps = { filterProducts,addToCart,getProducts,allList,getDetails ,decrementInStock};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
