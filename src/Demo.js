import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {StepContent, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewPlan from './NewPlan';
import RatePlanType from './RatePlanType';
import SelectChannel from './SelectChannel';
import SelectRoomClass from './SelectRoomClass';
import SelectRestrictions from './SelectRestrictions';

import './App.css';
import orange from '@material-ui/core/colors/orange';

const ratePlanType = {
  baseRatePlan:"Base Rate Plan",
  derivedRatePlan:"Derived Rate Plan",
  packageRatePlan:"Package Rate Plan",
  intervalRatePlan:"Interval Rate Plan"
};
const sources = {
  innCenter: "innCenter",
      bookingEngine: "Booking Engine",
      bookingDotCom: "Booking.Com",
      expedia: "Expedia"
};
const roomClasses = {
  kingOceanView: "King ocean View",
  kingCityView: "King city View",
  queenOceanView: "Queen ocean View",
  queenCityView: "Queen city View",
  penthouseSuite: "Penthouse Suite"
};
const restrictions ={
  lengthOfStay:"Length of stay",
  advancedPurchase:"Advanced purchase",
  promoCode: "Promo code"
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8CC63F', 
    },
    secondary : orange
  },
  overrides: {
    MuiStepLabel: {
        label: {
          height: '29px',	width: '547px',	color: '#799DBB',	'font-family': 'Lato',	'font-size': '24px',	'line-height': '29px',
            '&$active': {
              color: '#155388'
            },
            '&$completed' : {
              color: '#799DBB'
            },
        },
    },
    MuiStepContent: {
      root: {
        borderLeft: '1px solid #8CC63F'
      },
    },
    MuiStepConnector :{
      line: {
        borderColor: '#8CC63F',
      }
    },
    MuiStepIcon:{
      '&$completed' : {
        color: 'primary'
    }
  }
   
}
})
const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    height: '35px',
    width: '123px',
    marginLeft : theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,

  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  formControl: {
    margin: theme.spacing.unit,
    height: '40px',
    width: '404px'
  }
});

class VerticalLinearStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      newRateplanName : "",
      ratePlanType: "",
      channels:[],
      roomClasses:[],
      restrictions:[]
    };
  }
 getSteps=() =>{
    return ['New rate plan name', 'Select rate plan type', 'On which channels will this rate plan be distributed?',
  'Which room classes are available in this rate plan?', 'Which restrictions will be applied to this rate plan by default?'];
  }
  
  getStepContent=(step)=> {
    switch (step) {
      case 0:
        return <NewPlan onRatePlanNameChange={this.onRatePlanNameChange}/>;
      case 1:
        return <RatePlanType onRateTypeSelected={this.onRateTypeSelected} rateTypeSelected={this.state.ratePlanType}/>;
      case 2:
        return <SelectChannel onChannelSelected={this.onChannelSelected} channelsSelected={this.state.channels}/>;
      case 3:
        return <SelectRoomClass onRoomclassesSelected={this.onRoomclassesSelected} roomclassesSelected={this.state.roomClasses}/>;
      case 4:
        return <SelectRestrictions onRestrictionsSelected={this.onRestrictionsSelected} restrictionsSelected={this.state.restrictions}/>;
      default:
        return 'Unknown step';
    }
  }
  
  onRatePlanNameChange = (newRatePlanName) => {
    this.setState({
      newRateplanName: newRatePlanName,

    });
  };
  onRateTypeSelected = (ratePlanType) => {
    this.setState({
      ratePlanType: ratePlanType,
    });
  };
  onChannelSelected = (channel, isSelected) => {
    let _sources = this.state.channels;
    console.log("channels "+_sources);
    if(isSelected){
      _sources.indexOf(channel) === -1 ? _sources.push(channel) : console.log("This item already exists");
    }else{

      const filteredItems = _sources.filter(item => item !== channel);
      _sources = filteredItems;
      console.log("Afetr filter channels "+_sources);
    }

    console.log("Afetr concaqt channels "+_sources);
    this.setState({
      channels: _sources,
    });
  };

  onRoomclassesSelected = (roomClass, isSelected) => {
    let _roomClasses = this.state.roomClasses;
    console.log("_roomClasses "+_roomClasses);
    if(roomClass != 'selectAll'){
      if(isSelected){
        _roomClasses.indexOf(roomClass) === -1 ? _roomClasses.push(roomClass) : console.log("This item already exists");
      }else{
  
        const filteredItems = _roomClasses.filter(item => item !== roomClass);
        _roomClasses = filteredItems;
        console.log("Afetr filter channels "+_roomClasses);
      }
    }else{
      _roomClasses = Object.keys(roomClasses);
    }
    console.log("Afetr concaqt channels "+_roomClasses);
    this.setState({
      roomClasses: _roomClasses,
    });
  };

  onRestrictionsSelected = (restriction, isSelected) => {
    let _restrictions = this.state.restrictions;
    console.log("channels "+_restrictions);
    if(isSelected){
      _restrictions.indexOf(restriction) === -1 ? _restrictions.push(restriction) : console.log("This item already exists");
    }else{

      const filteredItems = _restrictions.filter(item => item !== restriction);
      _restrictions = filteredItems;
      console.log("Afetr filter _restrictions "+_restrictions);
    }

    console.log("Afetr concaqt _restrictions "+_restrictions);
    this.setState({
      channels: _restrictions,
    });
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      newRateplanName : "",
      ratePlanType: "",
      channels:[],
      roomClasses:[],
      restrictions:[]
    });
  };
  getValue=(stepIdx)=>{
    if(stepIdx===0){
      return this.state.newRateplanName;
    } else if(stepIdx===1){
      return ratePlanType[this.state.ratePlanType];
    } else if(stepIdx===2){
      //let sources="";
      let channels=this.state.channels;
      let channelsString=channels.map((c)=>{
         return (sources[c]);
      });
      return channelsString.join(",");
    } else if(stepIdx===3){
      //let sources="";
      let rcs=this.state.roomClasses;
      let roomClassesString=rcs.map((c)=>{
         return (roomClasses[c]);
      });
      return roomClassesString.join(",");
    }else if(stepIdx===4){
      //let sources="";
      let res=this.state.restrictions;
      console.log("res"+res);
      let restrictionsString=res.map((val)=>{
         return (restrictions[val]);
      });
      return restrictionsString.join(",");
    }
  }
  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label} >
              <StepLabel  style={{ fontSize: '150%', color: "secondary" }}
                icon={<i className="material-icons" >radio_button_checked</i>} color="primary">{label}</StepLabel>
                { activeStep !== index &&
                <TextField
                  id="read-only-input"
                  defaultValue=""
                  className={classes.formControl}
                  margin="normal"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={this.getValue(index)}
                />
                }
                { activeStep === index &&
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                  disabled={! this.getValue(index)}
                >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button> 
              }
              {  activeStep === index &&
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
              }
    }
                <StepContent>
                  <p>{this.getStepContent(index)}</p>
                  <div className={classes.actionsContainer}>
                    <div>
                      
                    </div>
                  </div>
                </StepContent>
              </Step>
              
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <p>All steps completed - you&quot;re finished</p>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
      </MuiThemeProvider>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
