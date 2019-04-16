import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  background-color: #fff;
  border-bottom: 1px solid #dddddd;
  padding: 15px 0px;

  div.user-detail {
    display: flex;
    align-items: center;

    img {
      border-radius: 100px;
      width: 48px;
      height: 48px;
      margin: 0 15px;
    }

    ul {
      list-style: none;

      li {
        font-weight: bold;
        font-size: 14px;

        small {
          font-weight: normal;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }

  div.actions-buttons {
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
