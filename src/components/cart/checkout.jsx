import React from 'react';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
}from '@material-ui/core';
import {  Delete } from '@material-ui/icons';
import { remove } from '../../store/cart';

const Checkout = (props) => {
  return (

    <List >
      {props.cart.inCart.map((val, idx) => {
        return (
          <ListItem>

            <ListItemText primary={val.name} />
            <ListItemText primary={val.price} $ />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  props.remove(idx);
                }}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
      <hr></hr>
      <ListItem>

            <ListItemText primary='Total' />
            <ListItemText primary={props.cart.inCart.reduce((total,obj)=>total+=obj.price ,0).toFixed(2)} $ />
            
          </ListItem>
    </List>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = { remove };
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
