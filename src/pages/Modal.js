import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class SimpleModal extends React.Component {
  state = { open: false };

  handleOpen = () => { this.setState({ open: true }); };

  handleClose = () => { this.setState({ open: false }); };

  render() { const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom>
        Нажмите для доступа к модальному окну!
        </Typography>
        <Button onClick={this.handleOpen}>Открыть мод</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
            Текст в модальном окне
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Мягкий фильм, не предположительный траур, но был язычок.
            </Typography>
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// Нам нужна промежуточная переменная для обработки рекурсивного вложения.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
