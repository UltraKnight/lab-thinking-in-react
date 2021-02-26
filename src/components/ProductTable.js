import React, { Component } from 'react'
import ProductRow from './ProductRow';
import './ProductTable.css';

export default class ProductTable extends Component {
    render() {
        let {products} = this.props;
        return (
            <table className='ProductTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((product, i) => {
                        return product.stocked
                        ? <ProductRow key={i} {...product} />
                        : <ProductRow style={{color: 'red'}} key={i} {...product} />
                    })
                }
                </tbody>
            </table>
        )
    }
}