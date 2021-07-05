import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 const ButtonAppBar=(props)=> {
  const classes = useStyles();

  console.log(props)
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/'  style={{textDecoration:'none',color:'white'}}><h2>OUR STORE</h2></Link>
          </Typography>
          <Button color="inherit"><Link  to='/cart'  style={{textDecoration:'none',color:'white'}}>Cart ( {props.cart.inCart.length}  )</Link>  </Button>
        </Toolbar>
      </AppBar>
  );
}

const mapStateToProps = (state) => ({
  cart:state.cart
});

export default connect(mapStateToProps)(ButtonAppBar);

