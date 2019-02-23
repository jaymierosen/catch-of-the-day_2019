import React, { Fragment, Component } from 'react';

class StorePicker extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    // jsx -- writing js and html
    // need return () to render multiple elements
    return (
      // always need a parent element to support child elements
      // <div>
      //   <p>Hello!</p>
      // </div>
      // you can use React.Fragment/Fragment, too
      // <Fragment>
      //   <p>Hello!</p>
      //   <div>
      //     <p>I'm Jaymie.</p>
      //   </div>
      // </Fragment>
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;