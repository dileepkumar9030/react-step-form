import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import { componentFromStream } from 'recompose';

class Success extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }

    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title='Success' />
            <h1>Thanks for your Submission</h1>
            <p>You wil get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button:{
        margin: 15
    }
}

export default Success
