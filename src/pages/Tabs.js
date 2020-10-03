import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from '@material-ui/icons/Phone';
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
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
            <Tab label="Цель 1" />
            <Tab label="Цель 2" />
            <Tab label="Цель 3" />
            <Tab label="Цель 4" />
            <Tab label="Цель 5" />
            <Tab label="Цель 6" />
            <Tab label="Цель 7" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Пункт первый</TabContainer>}
        {value === 1 && <TabContainer>Пункт второй</TabContainer>}
        {value === 2 && <TabContainer>Пункт третий</TabContainer>}
        {value === 3 && <TabContainer>Пункт четвёртый</TabContainer>}
        {value === 4 && <TabContainer>Пункт пятый</TabContainer>}
        {value === 5 && <TabContainer>Пункт шестой</TabContainer>}
        {value === 6 && <TabContainer>Пункт седьмой</TabContainer>}

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
              <Tab label="Ход Первый" />
              <Tab label="Ход Второй" />
              <Tab label="Ход Третий" />
              <Tab label="Ход Четвёртый" />
              <Tab label="Ход пятый" />
              <Tab label="Ход шестой" />
              <Tab label="Ход седьмой" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Шаг первый</TabContainer>}
          {value === 1 && <TabContainer>Шаг второй</TabContainer>}
          {value === 2 && <TabContainer>Шаг третий</TabContainer>}
          {value === 3 && <TabContainer>Шаг четвёртый</TabContainer>}
          {value === 4 && <TabContainer>Шаг пятый</TabContainer>}
          {value === 5 && <TabContainer>Шаг шестой</TabContainer>}
          {value === 6 && <TabContainer>Шаг седьмой</TabContainer>}
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
              <Tab icon={<MenuIcon />} />
              <Tab icon={<MailIcon />} />
              <Tab icon={<PhoneIcon />} />
              <Tab icon={<ReportIcon />} />
              <Tab icon={<FavoriteIcon />} />
              <Tab icon={<PersonPinIcon />} />
              
              <Tab icon={<DeleteIcon />} />
            </Tabs>
          </Paper>
          {value === 0 && <TabContainer>Контакты</TabContainer>}
          {value === 1 && <TabContainer>Лайки</TabContainer>}
          {value === 2 && <TabContainer>Письма</TabContainer>}
          {value === 3 && <TabContainer>Статьи</TabContainer>}
          {value === 4 && <TabContainer>Очерки</TabContainer>}
        </div>
      </div>
    );
  }
}

SimpleTabs.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(SimpleTabs);