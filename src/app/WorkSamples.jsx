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

    return (
      <li className="sample">
        <p className="sample-title">{content.title}</p>
        <div>
            { content.screenshot ?
              <div className="pure-u-lg-1-2">
                <img src={content.screenshot}></img>
              </div>
              : null
            }
          <div className="pure-u-lg-1-2">
            <div>
              <p className="sample-subhead">Description</p>
              <p  dangerouslySetInnerHTML={{__html: content.description }}></p>
            </div>
            <div>
              <p className="sample-subhead">Technologies Used</p>
              <p>
                { (() => {
                    if (content.tags) {
                      return content.tags.map((item, index) => {
                        return ( <a className="tag" key={index} href={item.url} target="_blank">  {item.name}  </a> );
                      });
                    }
                  })()
                }
              </p>
            </div>
            <div>
              <a className="pure-button" href={content.githubLink} target="_blank">
                <i className="fa fa-github" aria-hidden="true"> Repo</i>
              </a>
              { content.demoLink ?
                  <a className="pure-button" href={content.demoLink} target="_blank">
                    <i className="fa fa-laptop" aria-hidden="true"> Demo</i>
                  </a>
                  : null
              }
            </div>
          </div>
        </div>
      </li>
    );
  }
};

export default WorkSamples
