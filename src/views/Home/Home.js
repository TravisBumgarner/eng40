import React, { Component } from 'react';
import { connect } from 'react-redux';


export class Home extends Component {

  render() {

    return (
      <div>
        HI!
      </div>
    )

  }
}

export default connect((state) => ({

}), {

})(Home);
