import React, {PureComponent} from 'react';


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1,
      };

      this.playButtonClickHandlers = {};
    }
  }
};

export default withActiveItem;
