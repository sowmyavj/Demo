import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const restrictions ={
    lengthOfStay:"Length of stay",
    advancedPurchase:"Advanced purchase",
    promoCode: "Promo code"
  }
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3EA8F4', 
      }
    },
    overrides: {
      MuiFormLabel: {
          label: {
            height: '57px',	width: '546px',	
            color: '#333333',
              'font-family': 'Lato',	
              'font-size': '16px',	
              'font-weight': '300',
              'line-height': '19px'
          }
      },
      MuiFormControlLabel: {
        label: {
          'height': '22px',
          'width': '140px',	
          'color': '#333333',	
          'font-family': 'Lato',	
          'font-size': '18px',	
          'line-height': '22px',
        },
    }
    }
  })
const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  innerformControl: {
    margin: theme.spacing.unit * 3,
  },
  minStayformControl:{
    margin: theme.spacing.unit * 3,
    width:'20px'
  },
  button: {
    margin: theme.spacing.unit * 3,
    height: '25px',
    width: '25px',
  },
  icon: {
    color :"white"
  },
  infoIcon: {
    color :"white"
  }
});

class CheckboxesGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        lengthOfStay:false,
        advancedPurchase:false,
        promoCode: false,
        minLengthOfStay: false,
        maxLengthOfStay: false,
        minAdvancePurchase: false,
        maxAdvancePurchase: false,
        minLengthOfStayDays: 0,
        maxLengthOfStayDays:0,
        minAdvancePurchaseDays:0,
        maxAdvancePurchaseDays:0
    };
   
  }
  componentDidMount(){
    let temp = this.props.restrictionsSelected;
    if(temp){
      temp.map((val)=>{
        this.setState({
          [val] : true
        });
      });
    }else{
      this.setState ( {
        lengthOfStay: false,
        advancedPurchase: false,
        promoCode: false,
        minLengthOfStay: false,
        maxLengthOfStay: false,
        minAdvancePurchase: false,
        maxAdvancePurchase: false
      });
    }
    this.setState ( {
      minLengthOfStayDays: this.props.minLenDays,
      maxLengthOfStayDays : this.props.maxLenDays,
      minAdvancePurchaseDays: this.props.minAdvPurchaseDays,
      maxAdvancePurchaseDays: this.props.maxAdvPurchaseDays
    });

  }
  handleChange = name => event => {
    console.log("handleChange "+event.target.value+" "+event.target.checked);
    this.setState({ [name]: event.target.checked });
    this.props.onRestrictionsSelected(event.target.value,event.target.checked );
  };
  handleIncrementMinStay =(e) =>{
      let _minLengthOfStayDays=this.state.minLengthOfStayDays;
      _minLengthOfStayDays=_minLengthOfStayDays+1;
      this.setState({
        minLengthOfStayDays:_minLengthOfStayDays
      });
      this.props.handleMinLengthOfStayDays(_minLengthOfStayDays); 
  };
  handleDecrementMinStay = (e) =>{
      let _minLengthOfStayDays=this.state.minLengthOfStayDays;
      _minLengthOfStayDays=_minLengthOfStayDays-1;
      console.log(_minLengthOfStayDays);
      this.setState({
        minLengthOfStayDays:_minLengthOfStayDays
      });
      this.props.handleMinLengthOfStayDays(_minLengthOfStayDays);
  };
  handleIncrementMaxStay =(e) =>{
    let _maxLengthOfStayDays=this.state.maxLengthOfStayDays;
    _maxLengthOfStayDays=_maxLengthOfStayDays+1;
    this.setState({
      maxLengthOfStayDays:_maxLengthOfStayDays
    });
    this.props.handleMaxLengthOfStayDays(_maxLengthOfStayDays);
  };
  handleDecrementMaxStay = (e) =>{
    let _maxLengthOfStayDays=this.state.maxLengthOfStayDays;
    _maxLengthOfStayDays=_maxLengthOfStayDays-1;
    console.log(_maxLengthOfStayDays);
    this.setState({
      maxLengthOfStayDays:_maxLengthOfStayDays
    });
    this.props.handleMaxLengthOfStayDays(_maxLengthOfStayDays);
};
handleIncrementMinAdvancePurchaseDays =(e) =>{
  let _minAdvancePurchaseDays=this.state.minAdvancePurchaseDays;
  _minAdvancePurchaseDays=_minAdvancePurchaseDays+1;
  this.setState({
    minAdvancePurchaseDays:_minAdvancePurchaseDays
  });
  this.props.handleMinAdvancePurchaseDays(_minAdvancePurchaseDays);
};
handleDecrementMinAdvancePurchaseDays =(e) =>{
  let _minAdvancePurchaseDays=this.state.minAdvancePurchaseDays;
  _minAdvancePurchaseDays=_minAdvancePurchaseDays-1;
  this.setState({
    minAdvancePurchaseDays:_minAdvancePurchaseDays
  });
  this.props.handleMinAdvancePurchaseDays(_minAdvancePurchaseDays);
};
handleIncrementMaxAdvancePurchaseDays =(e) =>{
  let _maxAdvancePurchaseDays=this.state.maxAdvancePurchaseDays;
  _maxAdvancePurchaseDays=_maxAdvancePurchaseDays+1;
  this.setState({
    maxAdvancePurchaseDays:_maxAdvancePurchaseDays
  });
  this.props.handleMaxAdvancePurchaseDays(_maxAdvancePurchaseDays);
};
handleDecrementMaxAdvancePurchaseDays = (e) =>{
  let _maxAdvancePurchaseDays=this.state.maxAdvancePurchaseDays;
  _maxAdvancePurchaseDays=_maxAdvancePurchaseDays-1;
  this.setState({
    maxAdvancePurchaseDays:_maxAdvancePurchaseDays
  });
  this.props.handleMaxAdvancePurchaseDays(_maxAdvancePurchaseDays);
};
  render() {
    const { classes } = this.props;
    const { lengthOfStay,minLengthOfStay,maxLengthOfStay, advancedPurchase, promoCode, minAdvancePurchase, maxAdvancePurchase } = this.state;
    //const error = Object.values(this.state).filter(v => v).length !== 2;
    console.log("render : +"+this.props.restrictions);
    return (
        <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={lengthOfStay} onChange={this.handleChange('lengthOfStay')} value="lengthOfStay"
                color="primary" />
              }
              label="Length of stay"
            />
            <FormControl component="fieldset" className={classes.innerformControl}>
                {lengthOfStay && 
                <FormGroup>
                  <FormLabel component="legend">Guests must stay</FormLabel>
                  <span>
                  <FormControlLabel
                  control={ 
                  <Checkbox checked={minLengthOfStay} onChange={this.handleChange('minLengthOfStay')} value="minLengthOfStay"
                  color="primary"/>
                  }
                  label="Min"
                  />
                    {lengthOfStay &&
                      <Button variant="fab" color="primary" aria-label="Minus" className={classes.button}
                      onClick={(e) => { this.handleDecrementMinStay(e)}}
                      disabled={this.state.minLengthOfStayDays === 0
                                ||
                                !this.state.minLengthOfStay}>
                      <Icon className={classes.icon}>remove</Icon>
                      </Button>
                    }
                    {lengthOfStay &&
                      <TextField
                        id="read-only-input"
                        defaultValue=""
                        className={classes.minStayformControl}
                        margin="normal"
                        InputProps={{
                        readOnly: true,
                        }}
                        value={this.state.minLengthOfStayDays}
                      />
                    }
                    {lengthOfStay &&
                      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}
                      onClick={(e) => { this.handleIncrementMinStay(e)}}
                      disabled={!this.state.minLengthOfStay}>
                      <Icon className={classes.icon}>add</Icon>
                      </Button>
                    }
                    {lengthOfStay && <span>nights</span>}
                  </span>
                  <span>
                  <FormControlLabel
                  control={
                  <Checkbox checked={maxLengthOfStay} onChange={this.handleChange('maxLengthOfStay')} value="maxLengthOfStay"
                  color="primary"/>
                  }
                  label="Max"
                  />
                    {lengthOfStay &&
                      <Button variant="fab" color="primary" aria-label="Minus" className={classes.button}
                      onClick={(e) => { this.handleDecrementMaxStay(e)}}
                      disabled={this.state.maxLengthOfStayDays === 0
                                ||
                                !this.state.maxLengthOfStay}>
                      <Icon className={classes.icon}>remove</Icon>
                      </Button>
                    }
                    {lengthOfStay &&
                      <TextField
                        id="read-only-input"
                        defaultValue=""
                        className={classes.minStayformControl}
                        margin="normal"
                        InputProps={{
                        readOnly: true,
                        }}
                        value={this.state.maxLengthOfStayDays}
                      />
                    }
                    {lengthOfStay &&
                      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}
                      onClick={(e) => { this.handleIncrementMaxStay(e)}}
                      disabled={!this.state.maxLengthOfStay}>
                      <Icon className={classes.icon}>add</Icon>
                      </Button>
                    }
                    {lengthOfStay && <span>nights</span>}
                  </span>
      
                </FormGroup>
                }
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox checked={advancedPurchase} onChange={this.handleChange('advancedPurchase')} value="advancedPurchase" 
                color="primary"/>
              }
              label="Advanced Purchase"
            />
            <FormControl component="fieldset" className={classes.innerformControl}>
                {advancedPurchase && 
                <FormGroup>
                  <FormLabel component="legend">Guests must book</FormLabel>
                  <span>
                  <FormControlLabel
                  control={ 
                  <Checkbox checked={minAdvancePurchase} onChange={this.handleChange('minAdvancePurchase')} value="minAdvancePurchase"
                  color="primary"/>
                  }
                  />
                  {advancedPurchase && <span>More than </span>}
                    {advancedPurchase &&
                      <Button variant="fab" color="primary" aria-label="Minus" className={classes.button}
                      onClick={(e) => { this.handleDecrementMinAdvancePurchaseDays(e)}}
                      disabled={this.state.minAdvancePurchaseDays === 0 
                                ||
                                !this.state.minAdvancePurchase}>
                      <Icon className={classes.icon}>remove</Icon>
                      </Button>
                    }
                    {advancedPurchase &&
                      <TextField
                        id="read-only-input"
                        defaultValue=""
                        className={classes.minStayformControl}
                        margin="normal"
                        InputProps={{
                        readOnly: true,
                        }}
                        value={this.state.minAdvancePurchaseDays}
                      />
                    }
                    {advancedPurchase &&
                      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}
                      onClick={(e) => { this.handleIncrementMinAdvancePurchaseDays(e)}}
                      disabled={ !this.state.minAdvancePurchase}>
                      <Icon className={classes.icon}>add</Icon>
                      </Button>
                    }
                    {advancedPurchase && <span> days in advance of check-in date</span>}
                  </span>
                  <span>
                  <FormControlLabel
                  control={
                  <Checkbox checked={maxAdvancePurchase} onChange={this.handleChange('maxAdvancePurchase')} value="maxAdvancePurchase"
                  color="primary"/>
                  }
                  />
                  {advancedPurchase && <span>Within </span>}
                    {advancedPurchase &&
                      <Button variant="fab" color="primary" aria-label="Minus" className={classes.button}
                      onClick={(e) => { this.handleDecrementMaxAdvancePurchaseDays(e)}}
                      disabled={this.state.maxAdvancePurchaseDays === 0
                                ||
                                !this.state.maxAdvancePurchase}>
                      <Icon className={classes.icon}>remove</Icon>
                      </Button>
                    }
                    {advancedPurchase &&
                      <TextField
                        id="read-only-input"
                        defaultValue=""
                        className={classes.minStayformControl}
                        margin="normal"
                        InputProps={{
                        readOnly: true,
                        }}
                        value={this.state.maxAdvancePurchaseDays}
                      />
                    }
                    {advancedPurchase &&
                      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}
                      onClick={(e) => { this.handleIncrementMaxAdvancePurchaseDays(e)}}
                      disabled={!this.state.maxAdvancePurchase}>
                      <Icon className={classes.icon}>add</Icon>
                      </Button>
                    }
                    {advancedPurchase  && <span> days of check-in date</span>}
                  </span>
      
                </FormGroup>
                }
            </FormControl> 
            <span>
            <FormControlLabel
              control={
                <Checkbox checked={promoCode} onChange={this.handleChange('promoCode')} value="promoCode"
                color="primary" />
              }
              label="Promo code"
            />
            <Tooltip title="Guests must use the promo code '123456789' to qualify for this rate plan">
              <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
                <Icon className={classes.infoIcon} >info</Icon>
              </Button>
              </Tooltip>
            </span>
          </FormGroup>
        </FormControl>
      </div>
      </MuiThemeProvider>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
