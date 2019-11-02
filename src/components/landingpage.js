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
              <h1> Full Stack Web Developer </h1>

              <hr/>

              <p> JavaScript | React | NodeJS | Java | C++ | C | HTML/CSS </p>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/sfoust1/" rel="noopener noreferrer" target="_blank">
                  <img
                    src="https://fontawesome.com/icons/linkedin?style=brands"
                    alt="linkedIn"
                  />
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
