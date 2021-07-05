import React from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import { categoryChange } from '../../store/categories';
import { filterProducts } from '../../store/product';

const Categories = (props) => {
  return (
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
    >
      {props.categories.map((val) => {
        return (
          <Button
            onClick={() => {
              props.categoryChange(val.name);
              props.filterProducts(val.name);
            }}
          >
            {val.displayName}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  activeCategory: state.categories.active,
});
const mapDispatchToProps = { categoryChange, filterProducts };
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
