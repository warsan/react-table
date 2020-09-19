import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Пункт первый</TabContainer>}
        {value === 1 && <TabContainer>Пункт второй</TabContainer>}
        {value === 2 && <TabContainer>Пункт третий</TabContainer>}

        <div style={{marginTop: 20 + 'px'}}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
              <Tab label="Item Five" />
              <Tab label="Item Six" />
              <Tab label="Item Seven" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Пункт первый</TabContainer>}
          {value === 1 && <TabContainer>Пункт второй</TabContainer>}
          {value === 2 && <TabContainer>Пункт третий</TabContainer>}
          {value === 3 && <TabContainer>Пункт четвертый</TabContainer>}
          {value === 4 && <TabContainer>Пункт пятый</TabContainer>}
          {value === 5 && <TabContainer>Пункт шестой</TabContainer>}
          {value === 6 && <TabContainer>Пункт седьмой</TabContainer>}
        </div>

        <div className={classes.root}>
          <Paper style={{ width: 500 }}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab icon={<PhoneIcon />} />
              <Tab icon={<FavoriteIcon />} />
              <Tab icon={<PersonPinIcon />} />
            </Tabs>
          </Paper>
          {value === 0 && <TabContainer>Контакты</TabContainer>}
          {value === 1 && <TabContainer>Лайки</TabContainer>}
          {value === 2 && <TabContainer>Письма</TabContainer>}
        </div>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);