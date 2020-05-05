import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

import logo from '../../assets/1.png';


import 'typeface-roboto';

import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#f2f8f4',
  },
  root_menu: {
    flexGrow: 1,
  },
  paper_background_menu: {
    height: '100vh',
    width: '270px',
    backgroundColor: '#83DEA3',
  },
  menu_titulo: {

    fontWeight: 'bold',
    fontSize: '15px',
    letterSpacing: '0.2em',
    lineHeight: '21px',
    textAlign: 'left',
    color: '#fff',
    paddingTop: '20px',

  },
  background_titulo: {

    fontWeight: 'bold',
    fontSize: '50px',
    textAlign: 'left',
    color: '#43425d',
  },
  h3: {
    paddingLeft: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#43425d',
    width: '100vh',
  },
  container: {
    width: '100vh',
    height: '100px',
    fontFamily: 'SourceSansPro',
    fontSize: '50px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHheight: 1.42,
    letterSspacing: 'normal',
    textAlign: 'left',
    marginTop: '78px',
    marginLeft: '69px',
    backgroundColor: '#f2f8f4',
    display: 'flex',
  },
  presentText: {
    fontFamily: 'SourceSansPro',
    fontSize: '35px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
    textAlign: 'left',
  },
  presentCard: {
    margin: 10,
  },
  botaoRodape: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  teste2: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
  },
  footer: {
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#4ea16b',
    color: '#ffffff',
  },
  titulo: {
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
  },

}));

export default function MyCard() {
  const classes = useStyles();

  return (
    <Grid container xs={12} className={classes.root}>

      <CssBaseline />

      <Card className={classes.paper_background_menu} elevation={3}>
        <Grid item xs={12} className={classes.menu_titulo}>
          <h3 className={classes.h3}>Menu</h3>
          <Paper className={classes.root_menu}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <SendIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Home</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <PriorityHighIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Meu Cartão</Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit" noWrap>Pessoas</Typography>
              </MenuItem>
            </MenuList>
          </Paper>
        </Grid>

        <CardActions>
          <Button fullWidth className={classes.button}>Learn More</Button>
        </CardActions>

      </Card>
      <Grid container xs={10} sm={8} className={classes.content}>
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.titulo} img>
              Meu cartão virtual
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.presentText}>
              Esse é seu cartão de apresentação para os demais participantes do evento.
              Preenche-o com suas preferências e, principalmente,
              diga que tipo de network você procura.
            </Typography>

          </Grid>
          <Grid className={classes.presentCard} item xs={12}>
            <Paper>
              <Grid item xs={12} container direction="column" spacing={0} zeroMinWidth>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                  </ButtonBase>
                </Grid>
                <Typography gutterBottom variant="subtitle1">
                  NomeParticipante
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  TipodeNetworkParticipante
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Ocupaçaoparticipante
                </Typography>
                <Typography variant="body1" gutterBottom>
                  If the surface flow of the runoff is diverted and concentrated by drains that create constant
                  flows over the beach above the sea or river level, the beach will be eroded. If the surface flow
                  of the runoff is diverted and concentrated by drains that create constant flows over the beach
                  above the sea or river level, the beach will be eroded. If the surface flow of the runoff is diverted
                  and concentrated by drains that create constant flows over the beach above the sea or river level,
                  the beach will be eroded. If the surface flow of the runoff is diverted and concentrated by drains.
                  (DescriçãoDoParticipante)
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  telefone
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Linkedin
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Email
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}
