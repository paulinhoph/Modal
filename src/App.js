import React, { Component } from 'react';
import Modal from './Modal';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.toggleModal}>
          <div className="view view-first">
               <img className="img_Equipe" src="https://static.vakinha.com.br/uploads/vakinha/image/304153/cover_WhatsApp_Image_2018-04-24_at_20.11.40.jpeg" />
               <div className="mask"></div>
               <div className="content">
                 <h2 id="testimonials">Grupo de Dança</h2>
               </div>
            </div>       
        </div>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. 
        </Modal>
      </div>
    );
  }
}

export default App;
