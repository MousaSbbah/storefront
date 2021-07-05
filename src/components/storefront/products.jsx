import React from 'react';
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
import { filterProducts } from '../../store/product';
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
  return (
    <GridList  cols={3} >
      {props.products.map((val) => {
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
                <Button size="small" color="primary">
                  Add To Cart
                </Button>
                <Button size="small" color="primary">
                  Learn More
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
  products: state.products.products,
});
const mapDispatchToProps = { filterProducts };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
