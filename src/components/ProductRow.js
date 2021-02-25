import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        let {prodName, prodPrice} = this.props;
        return (
            <tr>
                <td>{prodName}</td>
                <td>{prodPrice}</td>
            </tr>
        )
    }
}
