import styled from 'styled-components';

export const Container = styled.li`
  background: #fff;
  border-radius: 10px;
  padding: 30px 30px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  margin: 30px 0;

  div.content {
    margin-top: 20px;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f4f4f4;

    p {
      text-align: justify;
      text-indent: 4em;
    }
  }
`;

export const Owner = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    strong {
      font-size: 16px;
    }

    span {
      color: #667581;
      padding-top: 2px;
    }
  }
`;
