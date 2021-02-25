import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

export default class FilterableProductTable extends Component {
    state = {
        //array
        products: this.props.products
    }
    
    showProductsHandler = (filterName, filterOnStock) => {
        let products = [... this.props.products];
        if(filterOnStock) {
            this.setState({
                products: products.filter(product => {
                    return product.name.toLowerCase().includes(filterName) && product.stocked
                })
            })
        } else {
            this.setState({
                products: products.filter(product => {
                    return product.name.toLowerCase().includes(filterName)
                })
            })
        }
    }


    render() {
        return (
            <div className='FilterableProductTable'>
                <h1>IronStore</h1>
                <SearchBar filterProduct={this.showProductsHandler} />
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}
