import React from 'react';

import { Container, Owner } from './styles';

import Comment from '../Comment';

export default function Post({ data }) {
  return (
    <Container>
      <Owner>
        <img src={data.author.avatar} alt="Avatar" />
        <div>
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </div>
      </Owner>
      <div className="content">
        <p>{data.content}</p>
      </div>
      <ul>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </Container>
  );
}
