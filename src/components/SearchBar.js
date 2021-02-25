import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    state = {
        filterName: '',
        filterOnStock: false
    }

    handleChange = e => {
        let {name, value, type} = e.target;

        if(type === 'checkbox') {
            value = e.target.checked;
        }

        this.setState({
            [name]: value
        }, () => {this.props.filterProduct(this.state.filterName, this.state.filterOnStock)}
    )}

    render() {
        let {filterName, filterOnStock} = this.state;
        return (
            <div className='SearchBar'>
                <label htmlFor='filterName'>Search</label>
                <input type="text" id='filterName' name='filterName' onChange={this.handleChange} value={filterName} />
                <div>
                    <input type="checkbox" id='onStock' name='filterOnStock' onChange={this.handleChange} checked={filterOnStock} />
                    <label htmlFor='onStock'>Only show products on stock</label>
                </div>
            </div>
        )
    }
}