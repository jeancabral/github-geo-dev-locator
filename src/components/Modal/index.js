import React from 'react';
import { Container } from './styles';

const Modal = ({ show, children }) => {
  console.log(show);

  return (
    <Container modalDisplay={show}>
      <div className="modal-main">
        <h3>{children}</h3>
        <input placeholder="Usuário no Github" />
        <div className="actions-buttons">
          <button className="cancel" type="button" onClick={() => false}>
            Cancelar
          </button>
          <button className="save" type="button" onClick={() => false}>
            Salvar
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
