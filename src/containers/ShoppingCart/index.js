import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.css';

export class ShoppingCart extends Component {

  renderShoppingCart = () => {
    const { shoppingCart } = this.props;
    return shoppingCart.map((item) => {
      return (
        <li
          onClick={() => console.log('remove from cart')}
          key={item.id}
          className={'SC-list-item'}
        >
          <img role="presentation" src={item.link} />
          {item.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className={'SC-list'}>
        {this.renderShoppingCart()}
      </ul>
    )
  }

}

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart,
})

/*
  function connect(mapStateToProps, mapDispatchToProps) {
    return function(ourComponent) {
      //it passes in state, as well as actions, via props
    }
  }
*/

export default connect(mapStateToProps)(ShoppingCart)
