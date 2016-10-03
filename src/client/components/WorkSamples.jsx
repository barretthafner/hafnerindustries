import React from 'react';

class WorkSamples extends React.Component {

  render() {

    const { samples, title } = this.props;
    return (
      <section className="container is-center">
        <p className="content-head">{title}</p>
        <ul className="sample-block">
            {samples.map(function(item, index) {
              return < Sample content={item} key={index} />
            })}
        </ul>
      </section>
    );
  }
};

class Sample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const content = this.props.content;

    const Screenshot = (() => {
      if (content.screenshot && content.demoLink) {
        return (
          <div className="pure-u-lg-1-2">
            <a href={content.demoLink} target='_blank'><img src={content.screenshot}></img></a>
          </div>
        );
      } else if (content.screenshot) {
        return (
          <div className="pure-u-lg-1-2">
            <a href={content.repoLink} target='_blank'><img src={content.screenshot}></img></a>
          </div>
        );
      } else { return null; }
    })();

    const Description = (
      <div className="pure-u-lg-1-2">
        <p className="sample-title">{content.title}</p>
        <div>
          <p className="description" dangerouslySetInnerHTML={{__html: content.description }}></p>
        </div>
        <div>
          <div>
            { (() => {
                if (content.tags) {
                  return content.tags.map((item, index) => {
                    return ( <a className="tag" key={index} href={item.url} target="_blank">  {item.name}  </a> );
                  });
                }
              })()
            }
          </div>
        </div>
        <div>
          <a className="pure-button pure-button-active" href={content.repoLink} target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
             &nbsp;Repo
          </a>
          { content.demoLink ?
              <a className="pure-button pure-button-active" href={content.demoLink} target="_blank">
                <i className="fa fa-laptop" aria-hidden="true"></i>
                &nbsp;Demo
              </a>
              : null
          }
        </div>
      </div>
    );

    return (
      <li className="sample">
          {
            (()=> {
              if (content.imagePosition === 'LEFT') {
                return (
                  <div>
                    {Screenshot}
                    {Description}
                  </div>
                );
              } else {
                return (
                  <div>
                    {Description}
                    {Screenshot}
                  </div>
                );
              }
            })()
          }
      </li>
    );
  }
};

export default WorkSamples
