import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  background-color: #fff;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 15px;

  img {
    flex: 1;
    border-radius: 100px;
    width: 48px;
    height: 48px;
    margin: 0 10px;
  }

  ul {
    flex: 3;
    list-style: none;

    li {
      font-weight: bold;
      padding: 5px 8px;
      font-size: 12px;
      line-height: 0.5em;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
      }
    }
  }

  div.buttons-container {
    display: flex;
    justify-content: space-around;

    button {
      background: transparent;
      font-size: 18px;
      font-weight: bold;
      margin: 0 5px;

      i {
        margin-right: 3px;
      }

      &:nth-child(2n) {
        border: none;
        color: #444;
      }

      &:nth-child(2n - 1) {
        border: none;
        color: #c11927;
      }
    }
  }
`;
