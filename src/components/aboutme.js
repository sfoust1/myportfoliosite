import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src='https://github.com/sfoust1/myportfoliosite/blob/master/Profile.jpg?raw=true'
                alt='avatar'
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '1em'}}> Steven Foust </h2>
            <h4 style={{color: 'grey'}}> Software Engineer </h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '75%'}}/>
            <p>
              I never give up, always look for better solutions,
              and strive towards readability.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '75%'}}/>
            <h5> Phone </h5>
            <p> (951) 529-5848 </p>
            <h5> Email </h5>
            <p> sfoust1@asu.edu </p>
            <h5>LinkedIn </h5>
            <p>
              <a href='https://www.linkedin.com/in/sfoust1/' rel='noopener noreferrer' target='_blank'>
                https://www.linkedin.com/in/sfoust1/
              </a>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '75%'}}/>
          </Cell>

          <Cell className='resume-right-col' col={8}>
            <h2> Education </h2>
            <Education
              startYear={2015}
              endYear={2020}
              schoolName='Arizona State University'
              schoolDescription='Software Engineering, May 2020'
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2> Experience </h2>
            <Experience
              startYear={2006}
              endYear={2019}
              jobName='Engineering Technician'
              jobDescription='During these years, I developed skills that lead me towards project management. I started off by creating components necessary for the installation of remote communications sites and medium-scale solar arrays. Then during the last 5 years I transitioned into planning/managing the installations: developing work schedules, assembling required parts lists, directing tasks, quality assurance, test development, technology improvement. I got to work with some amazing teams, innovative minds, and people who were passionate about their work. Leaving that line of work was difficult, but, I was/am very excited about this subject that I have become very passionate about, Software Engineering.'
            />
            <Experience
              startYear={2019}
              endYear='Present'
              jobName='Software Engineer'
              jobDescription="Working with CACI has been a great experience for me. Through this company, I have been able to experience the decision making process throughout each phase of the Software Development cycle, including: Requirements Analysis, Design, Font End implementation, Back end implementation (SQL queries, data metrics application, new remote postgres capabilities), testing, rollout, and support. Being able to experience these facets has made me very excited, and confident, about my choice to pursue Software Engineering."
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2> Skills </h2>
            <Skills
              skill='Languages: Java, JavaScript, SQL, Algorithms'
            />
            <Skills
              skill='Frameworks/APIs: JUnit, JavaFX, Node.js, Pug, Docker'
            />
            <Skills
              skill='Tools/Platforms: Eclipse, Atlassian, AWS, Atom, Gradle, Ant, MongoDB, DynamoDB, MySQL, Apache Tomcat, Taiga, Git, Linux, Windows'
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
