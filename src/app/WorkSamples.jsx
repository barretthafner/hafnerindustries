import React from 'react';
import { WorkSamplesContent } from './contentData';

class WorkSamples extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="work" className="container">
        <h2 className="content-head is-center">Work Samples</h2>
        <ul>
          <li>
            <h3>Custom Apps</h3>
            <ul>

              {WorkSamplesContent.customApps.map(function(item, index) {
                return < Sample content={item} key={index} />
              })}

            </ul>
          </li>
          <li>
            <h3>Plugins</h3>
            <ul>

               {WorkSamplesContent.plugins.map(function(item, index) {
                return < Sample content={item} key={index} />
              })}

            </ul>
          </li>
          <li>
            <h3>Fun Projects</h3>
            <ul>

               {WorkSamplesContent.funProjects.map(function(item, index) {
                return < Sample content={item} key={index} />
              })}

            </ul>
          </li>
        </ul>
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
    let demo, screenshot;
    if (content.demoLink) {
      demo = (
        <span>
          <a className="pure-button" href={content.demoLink} target="_blank">
            <i className="fa fa-laptop" aria-hidden="true"> Demo</i>
          </a>
        </span>
      );
    }

    if(content.screenshot) {
      screenshot = (
        <img src={content.screenshot}></img>
      );
    }

    return (
      <li className="sample">
        <h4>{content.title}</h4>
        {screenshot}
        <p dangerouslySetInnerHTML={{__html: content.description }}></p>
        <span>
          <a className="pure-button" href={content.githubLink} target="_blank">
            <i className="fa fa-github" aria-hidden="true"> Repo</i>
          </a>
        </span>
        {demo}
      </li>
    );
  }
};

export default WorkSamples
