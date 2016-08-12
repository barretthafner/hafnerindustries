import React from 'react';
import { WorkSamplesContent } from './contentData';

class WorkSamples extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    //make the codrops menu after it is mounted with the component
    var menu = new cbpHorizontalSlideOutMenu(document.getElementById('cbp-hsmenu-wrapper'));
    setTimeout(function() {
      document.getElementById('cbp-open').click();
    }, 100);
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
                <a id="cbp-open" href="#">Custom Apps</a>
                <ul className="cbp-hssubmenu cbp-hssub-rows">

                  {WorkSamplesContent.customApps.map(function(item, index) {
                    return < Sample content={item} key={index} />
                  })}

                </ul>
              </li>
              <li>
                <a href="#">Plugins</a>
                <ul className="cbp-hssubmenu cbp-hssub-rows">

                   {WorkSamplesContent.plugins.map(function(item, index) {
                    return < Sample content={item} key={index} />
                  })}

                </ul>
              </li>
              <li>
                <a href="#">Fun Projects</a>
                <ul className="cbp-hssubmenu">

                   {WorkSamplesContent.funProjects.map(function(item, index) {
                    return < Sample content={item} key={index} />
                  })}

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

    const content = this.props.content;
    let demo;
    if (content.demoLink) {
      demo = (
        <span>
          <a className="pure-button" href={content.demoLink} target="_blank">
            <i className="fa fa-laptop" aria-hidden="true"></i>
          </a>
        </span>
      );
    }

    return (
      <li className="sample">
        <h4>{content.title}</h4>
        <p dangerouslySetInnerHTML={{__html: content.description }}></p>
        <span>
          <a className="pure-button" href={content.githubLink} target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </span>
        {demo}
      </li>
    );
  }
};

export default WorkSamples
