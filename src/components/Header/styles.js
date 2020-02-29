import styled from 'styled-components';

export const Container = styled.header`
  height: 75px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  background: #3b5998;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    img {
      height: 100%;
      width: 200px;
    }

    div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: baseline;

      strong {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        padding-right: 20px;
      }
    }
  }
`;
