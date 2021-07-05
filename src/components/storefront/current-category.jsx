import React from 'react';
import { connect } from 'react-redux';
import { Typography} from '@material-ui/core';

const CurrentCategories = (props) => {
  return (
    <Typography style={{textAlign:'center'}}>
      <h1>{props.categories.categories.find(val=>(val.name === props.categories.active )).displayName}</h1>
      <p>{props.categories.categories.find(val=>(val.name === props.categories.active )).description}</p>
    </Typography>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories
});
export default connect(mapStateToProps)(CurrentCategories);
