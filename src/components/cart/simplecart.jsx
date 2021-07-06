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
import { incrementInStock } from '../../store/product';

const SimpleCart = (props) => {
  return (

    <List >
      {props.cart.inCart.map((val, idx) => {
        return (
          <ListItem>

            <ListItemText primary={val.name} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  props.incrementInStock(val);
                  props.remove(idx);
                }}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = { remove,incrementInStock };
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
