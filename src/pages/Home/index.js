import React from 'react';

import 'typeface-roboto';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/1.png';
import imageLogin from '../../assets/imageLogin.png';

import './style.css';
import { Grid, TextField } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

import { FormControl } from '@material-ui/core';
// const blueTheme = createMuiTheme({ palette: { primary: blue } })

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  containerMenuTop: {
    justifyContent: "right",
    backgroundColor: 'rgba(131, 222, 163, 0.59)',
    opacity: 0.92,
  },
  botao: {
    backgroundColor: '#4ea16b',
    color: '#FFFFFF',
  }
}));

export default function Home() {


  function handleLogar(e) {
    console.log(e);
  }
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs sm lg" style={{
        margin: 0,
        padding: 0,
      }}>
        <AppBar position="static"> 
          <Toolbar className={classes.containerMenuTop}>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Button style={{
                backgroundColor: '#4ea16b',
                color: '#FFFFFF',
                padding: '5px 15px',
                margin: '0 15px',
                fontFamily: 'Roboto',
                fontSize: '12px',
            }}>Sobre nós</Button>
            <Button style={{
                backgroundColor: '#4ea16b',
                color: '#FFFFFF',
                padding: '5px 15px',
                margin: '0 15px',
                fontFamily: 'Roboto',
                fontSize: '12px',
            }}>Login</Button>
            <Button style={{
                backgroundColor: '#4ea16b',
                color: '#FFFFFF',
                padding: '5px 15px',
                margin: '0 15px',
                fontFamily: 'Roboto',
                fontSize: '12px',
            }}>Cadastre-se</Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12} justify="center">
            <Grid container justify="center">
              <CardMedia image={logo} style={{
                width: '250px',
                height: '250px'
              }} />
            </Grid>
          </Grid>
          <Grid item xs={12} spacing={2} style={{padding: '0 150px'}}>
            <Grid container>
              <h1>Sobre nós</h1>
              <p style={{
                padding: '15px 50px',
                size: '15px',
              }}>Tarrafa é uma ferramenta que colabora na organização de seu evento. 
                  Pensando nas dores dos participantes, nós construímos um ambiente 
                  simples e que oferece uma qualidade nos eventos que era perdida em
                  plataformas online. Tenha mais facilidade na navegação, na gerencia 
                  de seus eventos, na realização de network e diversas outras vantagens.

                  Conheça a plataforma e se encante com nova experiência em eventos 
                  no mundo digital!  </p>
            </Grid>
          </Grid>
          <Grid container xs={12}  style={{padding: '0 150px'}}>
            <Grid item xs={6}>
            <h1>
               Entrar
             </h1>
              <Grid item  style={{
              backgroundColor: "#FFF",
              padding: '15px',
            }}>

               <div className="boxLogoLogin">
                 <img src={logo} className="logoLogin" alt="Tarrafa" />
               </div>

               <div className="formLogar">
                 <form onSubmit={handleLogar}>

                   <input placeholder="E-mail do usuário" />
                   <input type="password" placeholder="Senha" />

                   <Button style={{
                backgroundColor: '#4ea16b',
                color: '#FFFFFF',
                padding: '5px 15px',
                margin: '0 15px',
                fontFamily: 'Roboto',
                fontSize: '12px',
            }}>Login</Button>

                 </form>
                 </div>
            </Grid>
            </Grid>
            <Grid item xs={6}>
              <img src={imageLogin} className="imageLogin" alt="Tarrafa" />
            </Grid>
          </Grid>
          </Grid>
      </Container>]
    </>
  );
}


