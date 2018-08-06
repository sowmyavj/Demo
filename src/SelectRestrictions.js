import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
  }
});

class CheckboxesGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        lengthOfStay:false,
        advancedPurchase:false,
        promoCode: false
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
        lengthOfStay:false,
        advancedPurchase:false,
        promoCode: false
      });
    }
  }
  handleChange = name => event => {
    console.log("handleChange "+event.target.value+" "+event.target.checked);
    this.setState({ [name]: event.target.checked });
    this.props.onRestrictionsSelected(event.target.value,event.target.checked );
  };

  render() {
    const { classes } = this.props;
    const { lengthOfStay, advancedPurchase, promoCode } = this.state;
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
            <FormControlLabel
              control={
                <Checkbox checked={advancedPurchase} onChange={this.handleChange('advancedPurchase')} value="advancedPurchase" 
                color="primary"/>
              }
              label="Advanced Purchase"
            />
            <FormControlLabel
              control={
                <Checkbox checked={promoCode} onChange={this.handleChange('promoCode')} value="promoCode"
                color="primary" />
              }
              label="Promo code"
            />
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
