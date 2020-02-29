import React from 'react';

import { Container } from './styles';

export default function Comment({ data }) {
  return (
    <Container>
      <img src={data.author.avatar} alt={data.author.name} />
      <div>
        <p>{data.content}</p>
      </div>
    </Container>
  );
}
