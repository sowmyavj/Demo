import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const sources = {
  innCenter: "innCenter",
      bookingEngine: "Booking Engine",
      bookingDotCom: "Booking.Com",
      expedia: "Expedia"
};

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
const checkBox = {
  innCenter:'innCenter',
  bookingEngine:'Booking Engine',
  bookingDotCom:'Booking.Com',
  expedia:'Expedia'
}
class CheckboxesGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      innCenter: false,
      bookingEngine: false,
      bookingDotCom: false,
      expedia: false
    };
   
  }
  componentDidMount(){
    let temp = this.props.channelsSelected;
    if(temp){
      temp.map((val)=>{
        this.setState({
          [val] : true
        });
      });
    }else{
      this.setState ( {
        innCenter: false,
        bookingEngine: false,
        bookingDotCom: false,
        expedia: false
      });
    }
  }
  handleChange = name => event => {
    console.log("handleChange "+event.target.value+" "+event.target.checked);
    this.setState({ [name]: event.target.checked });
    this.props.onChannelSelected(event.target.value,event.target.checked );
    
  };

  render() {
    const { classes } = this.props;
    const { innCenter, bookingEngine, bookingDotCom, expedia } = this.state;
    //const error = Object.values(this.state).filter(v => v).length !== 2;
    console.log("render : +"+this.props.channels);
    return (
        <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">If you choose to distribute this Rate Plan to Booking.com, Expedia,
              please create the Rate Plan on external channel first and contact innRoad Support(phone #) to complete
              the mapping
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={innCenter} onChange={this.handleChange('innCenter')} value="innCenter"
                color="primary" />
              }
              label="innCenter"
            />
            <FormControlLabel
              control={
                <Checkbox checked={bookingEngine} onChange={this.handleChange('bookingEngine')} value="bookingEngine" 
                color="primary"/>
              }
              label="Booking Engine"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={bookingDotCom}
                  onChange={this.handleChange('bookingDotCom')}
                  value="bookingDotCom"
                  color="primary"
                />
              }
              label="Booking.Com"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={expedia}
                  onChange={this.handleChange('expedia')}
                  value="expedia"
                  color="primary"
                />
              }
              label="Expedia"
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
