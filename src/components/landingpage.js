import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='Landing-grid'>
          <Cell col={12}>
            <img
              src='https://github.com/sfoust1/myportfoliosite/blob/master/Profile.jpg?raw=true'
              alt='avatar'
              className="avatar-img"
            />

            <div className="banner-text">
              <h1> Full Stack Developer </h1>

              <hr/>

              <p> Java | JavaScript | NodeJS | Android | HTML/CSS </p>

              <div className="social-links">
              {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/sfoust1/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
              {/* Github */}
                <a href="https://github.com/sfoust1" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"/>
                </a>
              {/* Youtube */}
                <a href="https://www.youtube.com/channel/UCcO_3AN_uGsrga3JMtwHp3A" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
