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
          <li className="sample-block is-center">
            <h3>Custom Apps</h3>
            <ul>

              {WorkSamplesContent.customApps.map(function(item, index) {
                return < Sample content={item} key={index} />
              })}

            </ul>
          </li>
          <li className="sample-block is-center">
            <h3>Plugins</h3>
            <ul>

               {WorkSamplesContent.plugins.map(function(item, index) {
                return < Sample content={item} key={index} />
              })}

            </ul>
          </li>
          <li className="sample-block is-center">
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
    let tags = [];
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

    if (content.tags) {
      console.log(content.tags);
      tags = content.tags.map((item, index) => {
        return ( <span className="tag" key={index}>  {item}  </span> );
      });
    }

    return (
      <li className="sample">
        <h4>{content.title}</h4>
        <div>
          <div className="pure-u-lg-1-2">
            {screenshot}
          </div>
          <div className="pure-u-lg-1-2">
            <div>
              <h5>Description</h5>
              <p  dangerouslySetInnerHTML={{__html: content.description }}></p>
            </div>
            <div>
              <h5>Technologies Used</h5>
              <p>{tags}</p>
            </div>
            <div>
              <span>
                <a className="pure-button" href={content.githubLink} target="_blank">
                  <i className="fa fa-github" aria-hidden="true"> Repo</i>
                </a>
              </span>
              {demo}
            </div>
          </div>
        </div>
      </li>
    );
  }
};

export default WorkSamples
