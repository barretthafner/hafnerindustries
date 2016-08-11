import React from 'react';
import { WorkSamplesContent } from './contentData';


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

  componentDidMount () {
    console.log('bammmmm!');
    var menu = new cbpHorizontalSlideOutMenu(document.getElementById('cbp-hsmenu-wrapper'));
    setTimeout(function() {
      document.getElementById('cbp-open').click();
    }, 100);
  }

  //                   <li><a href="#"><img src="img/1.png" alt="img01"/><span>Delicate Wine</span></a></li>

  render() {
    return (
      <div id="work" className="container">
        <h2 className="content-head is-center">Work Samples</h2>
        <div className="main">
        <nav className="cbp-hsmenu-wrapper" id="cbp-hsmenu-wrapper">
          <div className="cbp-hsinner">
            <ul className="cbp-hsmenu">
              <li>
                <a id="cbp-open" href="#">Custom Apps</a>
                <ul className="cbp-hssubmenu cbp-hssub-rows">
                  < Sample />
                  < Sample />
                  < Sample />
                  < Sample />
                </ul>
              </li>
              <li>
                <a href="#">Plugins</a>
                <ul className="cbp-hssubmenu cbp-hssub-rows">
                  < Sample />
                </ul>
              </li>
              <li>
                <a href="#">Fun Projects</a>
                <ul className="cbp-hssubmenu">
                  < Sample />
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


class Sample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const test = WorkSamplesContent.customApps[0];
    console.log(test);
    return (
      <li className="sample">
        <h4>{test.title}</h4>
        <p dangerouslySetInnerHTML={{__html: test.description }}></p>
        <a href="https://github.com/barretthafner/open-bike-project"><i className="fa fa-github"></i>Github</a>
        <a href="https://open-bike-project.herokuapp.com/">Demo</a>
      </li>
    );
  }
};

export default WorkSamples
