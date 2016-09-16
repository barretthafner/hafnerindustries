import React from 'react';

class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="bio" className="bio l-box-lrg pure-g">
        <div className="l-box-lrg is-center pure-u-1 pure-u-sm-1-2 pure-u-lg-2-5">
          <img className="pure-img-responsive" src="img/me_circle.png"/>
        </div>
        <div className="pure-u-1 pure-u-sm-1-2 pure-u-lg-3-5">
          <h2 className="content-head content-head-ribbon">Bio.</h2>
          <p>
            Hello and welcome! I'm Barrett Hafner. A 32-year-old web developer living in Portland, OR. I am a graduate of the <a href="http://www.thinkful.com">Thinkful.com</a> bootcamp and do full-stack engineering with Node.js and React.
          </p>
          <p>
            In a my previous career I was a Product Designer/Developer with <a href="http://www.grovemade.com">Grovemade.com</a>, where I designed, prototyped, and manufactured designer, lifestyle goods.
          </p>
          <p>
            I also enjoy blues dancing, building led light sculptures, and making our lives better by making human/technology interfaces more intuative.
          </p>
        </div>
      </div>
    );
  }
};

export default Bio
