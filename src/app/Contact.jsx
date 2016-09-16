import React from 'react';
import Mailto from 'react-mailto';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="contact" className="content is-center l-box-lrg pure-g">
        <div className="pure-u-1">
          <h2 className="content-head content-head-ribbon">Contact</h2>
          <h3>Thanks for coming! Send me an email if you'd like to get in contact:</h3>
          <div>
            <Mailto email="barrett@hafnerindustries.com" obfuscate={true}><i className="fa fa-envelope" aria-hidden="true"></i></Mailto>
            <p>barrett@<span className="displaynone">null</span>hafnerindustries.com</p>
          </div>
          <h3>Or, say hello to me on these social networks:</h3>
          <div>
            <a className="fa fa-github" href="https://github.com/barretthafner"></a>
            <a className="fa fa-twitter" href="https://twitter.com/barretthafner"></a>
          </div>
        </div>

      </div>
    );
  }
};

export default Contact
