import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='Landing-grid'>
          <Cell col={12}>
            <img
              src='../Profile.jpg'
              alt='avatar'
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
