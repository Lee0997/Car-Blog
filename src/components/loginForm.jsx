import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// import logo1 from "../img/male1.png";
// <Image src={{logo1}} />

const LoginForm = () => (
  <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h1' color='blue' textAlign='center'>
        Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <label>Email Adress:</label>
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
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a style={{color: 'blue'}}href='registration'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  </div>
)

export default LoginForm