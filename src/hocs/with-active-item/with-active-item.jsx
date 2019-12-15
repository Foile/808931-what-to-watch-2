import React, {PureComponent} from "react";
import {number, func} from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: 0,
      };

      this._onChangeActiveItemHandler = this._onChangeActiveItemHandler.bind(this);
    }

    _onChangeActiveItemHandler(item) {
      this.setState({
        activeItem: item,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeItem = {this.state.activeItem}
        onChangeActiveItem = {this._onChangeActiveItemHandler}
      />;
    }
  }

  WithActiveItem.propTypes = {onChangeActiveItem: func,
    activeItem: number};

  return WithActiveItem;
};

export default withActiveItem;
