import React, {PureComponent} from "react";
import {number, func} from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: 0,
      };

      this._handleChangeActiveItem = this._handleChangeActiveItem.bind(this);
    }

    _handleChangeActiveItem(item) {
      this.setState({
        activeItem: item,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeItem = {this.state.activeItem}
        onChangeActiveItem = {this._handleChangeActiveItem}
      />;
    }
  }

  WithActiveItem.propTypes = {onChangeActiveItem: func,
    activeItem: number};

  return WithActiveItem;
};

export default withActiveItem;
