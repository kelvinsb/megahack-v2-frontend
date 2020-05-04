import React from 'react';

import 'typeface-roboto';


import logo from '../../assets/1.png';
import imageLogin from '../../assets/imageLogin.png';

import './style.css';

export default function Home() {


  function handleLogar(e) {
    console.log(e);
  }

  return (
    <div>
      <div className="menu">
        <div className="buttonsMenu">
          <button className="buttonMenu">
            <p className="textButtonMenu">
              Sobre
          </p>
          </button>
          <button className="buttonMenu">
            <p className="textButtonMenu">
              Login
          </p>
          </button>
          <button className="buttonMenu">
            <p className="textButtonMenu">
              Cadastre-se
          </p>
          </button>
        </div>
      </div>
      <div className="boxLogo">
        <img src={logo} className="logo" alt="Tarrafa" />
      </div>
      <div className="container">

        <div className="titleSobre">
          <h1> Sobre </h1>
        </div>

        <div className="descSobre">
          <p> Tarrafa é uma ferramenta que colabora na organização de seu evento.
          Pensando nas dores dos participantes, nós construímos um ambiente
          simples e que oferece uma qualidade nos eventos que era perdida em
          plataformas online. Tenha mais facilidade na navegação, na gerencia
            de seus eventos, na realização de network e diversas outras vantagens. </p>

          <p> Conheça a plataforma e se encante com nova experiência em eventos
            no mundo digital!  </p>
        </div>

        <div className="boxEntrar">
          <div className="boxLogin">
            <h1>
              Entrar
            </h1>

            <div className="logar">
              <div className="boxLogoLogin">
                <img src={logo} className="logoLogin" alt="Tarrafa" />
              </div>

              <div className="formLogar">
                <form onSubmit={handleLogar}>

                  <input placeholder="E-mail do usuário" />
                  <input type="password" placeholder="Senha" />

                  <button className="botao" type="submit"> Entrar </button>

                </form>
              </div>
            </div>

            <div className="image">
              <div className="boxImageLogin">
                <img src={imageLogin} className="imageLogin" alt="Tarrafa" />
              </div>
            </div>
          </div>
        </div>


        <div className="boxCadastrar">
          <div className="boxCadastro">
            <h1>
              Realize seu cadastro
            </h1>

            <div className="cadastrar">
              <div className="boxLogoLogin">
                <img src={logo} className="logoLogin" alt="Tarrafa" />
              </div>

              <div className="formCadastrar">
                <form onSubmit={handleLogar}>

                  <input  type="text" className="input" placeholder="Nome completo" />
                  <input  type="text" className="input" placeholder="E-mail" />
                  <input  type="text" className="input" placeholder="Cidade" />
                  <input  type="radio" className="inputRadio" value="Participante" /> Participante

                  <button className="botao" type="submit"> Próximo </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


