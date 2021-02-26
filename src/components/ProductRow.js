import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        let {name, price} = this.props;
        return (
            <tr>
                <td style={this.props.style}>{name}</td>
                <td>{price}</td>
            </tr>
        )
    }
}
