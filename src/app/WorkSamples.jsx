import React from 'react';

class WorkSamples extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content">
        <h2 className="content-head is-center">Work Samples</h2>

        <div className="pure-g">
          {
            this.props.content.map( (item, index) => {
              return <SampleBox title={item.title} description={item.description} icon={item.icon} key={index} />
            })
          }
        </div>
      </div>
    );
  }
};

class SampleBox extends React.Component {
  constructor(props) {
    super(props);
  }

  click() {
    console.log('bammmmm!');
  }

  render() {
    return (
      <div className="l-box pure-u-1 pure-u-md-1-3" onClick={this.click}>
        <h3 className="content-subhead">
          <i className={ "fa fa-" + this.props.icon }></i>
          {this.props.title}
        </h3>
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
};

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="cbp-hsmenu-wrapper" id="cbp-hsmenu-wrapper">
        <div class="cbp-hsinner">
          <ul class="cbp-hsmenu">
            <li>
              <a href="#">Lovely Spirits</a>
              <ul class="cbp-hssubmenu">
                <li><a href="#"><img src="images/1.png" alt="img01"/><span>Delicate Wine</span></a></li>
                <li><a href="#"><img src="images/2.png" alt="img02"/><span>Fine Spirit</span></a></li>
                <li><a href="#"><img src="images/3.png" alt="img03"/><span>Heavenly Ale</span></a></li>
                <li><a href="#"><img src="images/4.png" alt="img04"/><span>Juicy Lemonade</span></a></li>
                <li><a href="#"><img src="images/5.png" alt="img05"/><span>Wise Whiskey</span></a></li>
                <li><a href="#"><img src="images/6.png" alt="img06"/><span>Sweet Rum</span></a></li>
              </ul>
            </li>
            <li>
              <a href="#">Delicious Beverages</a>
              <ul class="cbp-hssubmenu cbp-hssub-rows">
                <li><a href="#"><img src="images/7.png" alt="img07"/><span>Lovely Slurp</span></a></li>
                <li><a href="#"><img src="images/8.png" alt="img08"/><span>Lemony Grappa</span></a></li>
                <li><a href="#"><img src="images/9.png" alt="img09"/><span>Eggy Liquor</span></a></li>
                <li><a href="#"><img src="images/10.png" alt="img10"/><span>Fresh Juice</span></a></li>
                <li><a href="#"><img src="images/1.png" alt="img01"/><span>Delicate Wine</span></a></li>
                <li><a href="#"><img src="images/2.png" alt="img02"/><span>Fine Spirit</span></a></li>
                <li><a href="#"><img src="images/3.png" alt="img03"/><span>Heavenly Ale</span></a></li>
                <li><a href="#"><img src="images/4.png" alt="img04"/><span>Juicy Lemonade</span></a></li>
                <li><a href="#"><img src="images/5.png" alt="img05"/><span>Wise Whiskey</span></a></li>
                <li><a href="#"><img src="images/6.png" alt="img06"/><span>Sweet Rum</span></a></li>
                <li><a href="#"><img src="images/1.png" alt="img01"/><span>Delicate Wine</span></a></li>
                <li><a href="#"><img src="images/2.png" alt="img02"/><span>Fine Spirit</span></a></li>
              </ul>
            </li>
            <li>
              <a href="#">Fine Liquors</a>
              <ul class="cbp-hssubmenu">
                <li><a href="#"><img src="images/10.png" alt="img10"/><span>Fresh Juice</span></a></li>
                <li><a href="#"><img src="images/6.png" alt="img06"/><span>Sweet Rum</span></a></li>
                <li><a href="#"><img src="images/9.png" alt="img09"/><span>Eggy Liquor</span></a></li>
              </ul>
            </li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default WorkSamples
