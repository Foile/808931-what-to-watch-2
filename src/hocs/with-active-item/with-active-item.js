import React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {activeItem: undefined};

      this._activeItemChangeHandler = this._activeItemChangeHandler.bind(this);
    }

    render() {
      const {activeItem} = this.state;
      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onActiveChange={this._activeItemChangeHandler}
        />
      );
    }

    _activeItemChangeHandler(item) {
      this.setState({activeItem: item});
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
