import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="footer l-box is-center">
        Copyright Hafner Industries, LLC 2016
      </div>
    );
  }
};

export default Footer
