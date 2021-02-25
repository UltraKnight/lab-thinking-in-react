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
                    products.map((prod, i) => {
                        return <ProductRow key={i} prodName={prod.name} prodPrice={prod.price} />
                    })
                }
                </tbody>
            </table>
        )
    }
}