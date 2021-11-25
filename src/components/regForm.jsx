import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const RegistrationForm = () => (
  <div id="home" className="intro route bg-image background">
  <div id="stars" />
  <div id="stars2" />
  <div id="stars3" />
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        Registration
      </Header>
      <Form size='large'>
        <Segment stacked>
        <label>UserName:</label>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='User-Name'
            type='User-name'
          />
          <label>Please enter an email address below:</label>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <label>Password:</label>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='blue' fluid size='large'>
            Sign Up 
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  </div>
)

export default RegistrationForm