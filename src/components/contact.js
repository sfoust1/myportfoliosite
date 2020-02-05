import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contacts extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
          <h2>
            Steven Foust
            <br/>
            <img
              src='https://github.com/sfoust1/myportfoliosite/blob/master/Profile.jpg?raw=true'
              alt='avatar'
              style={{height: '250px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              Let's do this!
            </p>
          </h2>
          </Cell>
          <Cell col={6}>
            <h2>
              Contact Me
            </h2>
            <hr/>
            <div className='contact-list'>

              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}} >

                  <i className='fa fa-phone-square' aria-hidden='true' />
                    (951) 529-5848

                  </ListItemContent>
                </ListItem>

              <ListItem>
                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}} >

                <i className='fa fa-envelope' aria-hidden='true' />
                  sfoust1@asu.edu

                </ListItemContent>
              </ListItem>

              </List>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contacts;
