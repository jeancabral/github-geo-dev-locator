import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  display: ${props => (props.modalDisplay ? 'block' : 'none')};

  div.modal-main {
    position: fixed;
    background: white;
    max-width: 300px;
    width: 100%;
    height: 200px;
    padding: 15px;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 15px 0px;
    }

    input {
      width: 100%;
      height: 40px;
      padding: 0 15px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-bottom: 10px;
      font-size: 16px;
      color: #444;
    }

    div.actions-buttons {
      display: flex;
      justify-content: space-between;
      width: 100%;
      button {
        max-width: 120px;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-weight: bold;
        font-size: 14px;
        border: 0;
        color: #fff;
        background: rgb(155, 101, 230);
        margin-top: 5px;

        &:hover {
          background: rgb(191, 154, 244);
        }

        &.save {
          background: rgb(155, 204, 130);
          &:hover {
            background: rgb(106, 177, 125);
          }
        }

        &.cancel {
          background: rgba(71, 82, 93, 0.8);
          &:hover {
            background: rgb(165, 165, 165);
          }
        }
      }
    }
  }
`;
