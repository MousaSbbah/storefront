import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from '@material-ui/core';
import { categoryChange } from '../../store/categories';
import { getCategories,allList } from '../../store/categories';
import { filterProducts } from '../../store/product';

const Categories = (props) => {
  useEffect(() => {
    props.getCategories();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
    >
             <Button disabled={('all' === props.activeCategory)}
            onClick={() => {
              props.categoryChange('all');
              props.filterProducts('all');
            }}
          >
            ALL
          </Button>
      {props.categories.map((val) => {
        return (
          <Button disabled={(val.name === props.activeCategory)}
            onClick={() => {
              props.categoryChange(val.name);
              props.filterProducts(val.name);
            }}
          >
            {val.name}
          </Button>
        );
      })}

    </ButtonGroup>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  activeCategory: state.categories.active,
  product:state.products
});
const mapDispatchToProps = { categoryChange, getCategories,filterProducts,allList };
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
