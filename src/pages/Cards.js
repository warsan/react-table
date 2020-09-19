import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => (
  {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    card: {
      minWidth: 275,
      maxWidth: 400,
      marginRight: 20,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }
);

class SimpleCard extends Component {

  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render () {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
           <CardContent>
             <Typography className={classes.title} color="textSecondary">
            Слово дня
             </Typography>
             <Typography variant="headline" component="h2">
               be{bull}nev{bull}o{bull}lent
             </Typography>
             <Typography className={classes.pos} color="textSecondary">
             прилагательное
             </Typography>
             <Typography component="p">
              из лучших побуждений и любезно.<br />
              {'"a benevolent smile"'}
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="small">Выучить больше</Button>
           </CardActions>
        </Card>
  
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            Ящерица
            </Typography>
            <Typography component="p">
            Ящерицы - широко распространенная группа чешуекрылых рептилий, насчитывающая более 6000 видов, варьирующихся на всех континентах, кроме Антарктиды
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
            Делиться
            </Button>
            <Button size="small" color="primary">
            Выучить больше
            </Button>
          </CardActions>
        </Card>
  
        <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title="Паэлья с креветками и чоризо"
              subheader="14 сентября, 2016"
            />
            <CardMedia className={classes.media}
              image="https://material-ui.com/static/images/cards/paella.jpg"
              title="Созерцательная рептилия"
            />
            <CardContent>
              <Typography component="p">
              Эта впечатляющая паэлья - идеальное блюдо для вечеринки и забавное блюдо, которое можно приготовить вместе с вашими гостями.  
              Хотите, добавьте 1 стакан мёрзлого горошка вместе с мидиями.
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body2">
                Рецепты:
                </Typography>
                <Typography paragraph>
                Нагрейте в кастрюле 1/2 стакана бульона до закипания, добавьте шафран и отставьте на 10 минут.
                </Typography>
                <Typography paragraph>
                Нагрейте масло в сковороде для паэльи (14–16 дюймов) или в большой глубокой сковороде на среднем или высоком уровне.
                  при высокой температуре. 
                  Добавьте курицу, креветки и чоризо и готовьте, периодически помешивая, от 6 до 8 минут, пока не подрумянеится. Переложите креветки в большую тарелку и отложите, оставив курицу и чоризо на сковороде. 
                  Добавить перец, лавровый лист, чеснок, помидоры, лук,
                  соль и перец, и готовить около 10 минут, часто помешивая, пока не загустеет и не станет ароматным. 
                  Добавьте шафрановый бульон и оставшиеся 4 1/2 стакана куриного бульона; довести до кипения.
                </Typography>
                <Typography paragraph>
                Добавьте рис и аккуратно перемешайте, чтобы он равномерно распределился. 
                Сверху посыпьте артишоками и перцем и готовьте, не помешивая,пока большая часть жидкости не впитается, 15–18 минут.
                Уменьшите огонь до средне-слабого, добавьте отложенные креветки и мидии, заправляя их в рис и готовьте снова, не помешивая, пока мидии не раскроются и просто нежное, еще 5-7 минут. (Выбросьте все закрытые мидии).
                </Typography>
                <Typography>
                Снимите с огня, дайте остыть 10 минут, а затем подавайте.
                </Typography>
              </CardContent>
            </Collapse>
        </Card>
      </div>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);