import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: baseline;
  margin-top: 20px;
  padding-top: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  > div {
    background: #f4f4f4;
    border-radius: 20px;
    p {
      padding: 20px;
      text-align: justify;
    }
  }
`;
