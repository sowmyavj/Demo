import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const roomClasses = {
    selectAll: "Select All",
  kingOceanView: "King ocean View",
  kingCityView: "King city View",
  queenOceanView: "Queen ocean View",
  queenCityView: "Queen city View",
  penthouseSuite: "Penthouse Suite"
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

class CheckboxesGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        selectAll: false,
        kingOceanView: false,
        kingCityView: false,
        queenOceanView: false,
        queenCityView: false,
        penthouseSuite: false
    };
   
  }
  componentDidMount(){
    let temp = this.props.roomclassesSelected;
    //console.log("room class selected"+temp);
    if(temp){
      temp.map((val)=>{
        this.setState({
          [val] : true
        });
      });
    }else{
      this.setState ( {
        selectAll: false,
        kingOceanView: false,
        kingCityView: false,
        queenOceanView: false,
        queenCityView: false,
        penthouseSuite: false
      });
    }
  }

  handleChange = name => event => {
    console.log("handleChange "+event.target.value+" "+event.target.checked);
    if(name != 'selectAll'){
        this.setState({ [name]: event.target.checked });
    }else{
        let roomClasskeyList = Object.keys(roomClasses);
        roomClasskeyList.map((rc)=>{
            this.setState({ [rc]: event.target.checked });
        });
    }
    
    this.props.onRoomclassesSelected(event.target.value,event.target.checked );
    
  };

  render() {
    const { classes } = this.props;
    const { selectAll, kingOceanView, kingCityView, queenOceanView, queenCityView, penthouseSuite } = this.state;
    //const error = Object.values(this.state).filter(v => v).length !== 2;

    return (
        <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">This setting is the default for the Rate Plan. It can later be changed for an individual season
          </FormLabel>
          <FormGroup>
            <FormControlLabel
            control={
                <Checkbox checked={selectAll} onChange={this.handleChange('selectAll')} value="selectAll"
                color="primary" />
            }
            label="Select all"
            />
            <FormControlLabel
              control={
                <Checkbox checked={kingOceanView} onChange={this.handleChange('kingOceanView')} value="kingOceanView"
                color="primary" />
              }
              label="King ocean View"
            />
            <FormControlLabel
              control={
                <Checkbox checked={kingCityView} onChange={this.handleChange('kingCityView')} value="kingCityView" 
                color="primary"/>
              }
              label="King city View"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={queenOceanView}
                  onChange={this.handleChange('queenOceanView')}
                  value="queenOceanView"
                  color="primary"
                />
              }
              label="Queen ocean View"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={queenCityView}
                  onChange={this.handleChange('queenCityView')}
                  value="queenCityView"
                  color="primary"
                />
              }
              label="Queen city View"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={penthouseSuite}
                  onChange={this.handleChange('penthouseSuite')}
                  value="penthouseSuite"
                  color="primary"
                />
              }
              label="Penthouse Suite"
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
