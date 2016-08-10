import React from 'react';

//class WorkSamples extends React.Component {
//  constructor(props) {
//    super(props);
//  }
//
//  render() {
//    return(
//      <div className="content">
//        <h2 className="content-head is-center">Work Samples</h2>
//        <MenuBar />
//      </div>
//    );
//  }
//};



class WorkSamples extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="work" className="container">
        <h2 className="content-head is-center">Work Samples</h2>
        <div className="main">
        <nav className="cbp-hsmenu-wrapper" id="cbp-hsmenu-wrapper">
          <div className="cbp-hsinner">
            <ul className="cbp-hsmenu">
              <li>
                <a href="#">Custom Apps</a>
                <ul className="cbp-hssubmenu">
                  <li><a href="#"><img src="img/1.png" alt="img01"/><span>Delicate Wine</span></a></li>

                </ul>
              </li>
              <li>
                <a href="#">Plugins</a>
                <ul className="cbp-hssubmenu cbp-hssub-rows">
                  <li><a href="#"><img src="img/7.png" alt="img07"/><span>Lovely Slurp</span></a></li>

                </ul>
              </li>
              <li>
                <a href="#">Fun Projects</a>
                <ul className="cbp-hssubmenu">
                  <li><a href="#"><img src="img/10.png" alt="img10"/><span>Fresh Juice</span></a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </div>
    );
  }
};

export default WorkSamples
