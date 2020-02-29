import React, { useState } from 'react';

import { Container } from './styles';

import Post from '../Post';

export default function PostList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: 'Caio Magri',
        avatar:
          'https://avatars2.githubusercontent.com/u/26873791?s=400&u=caac3d548bf1b899e7619599ed4340f83b87f1e7&v=4'
      },
      date: '28 Fev 2020',
      content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
      comments: [
        {
          id: 1,
          author: {
            name: 'Diego Fernandes',
            avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=400&v=4'
          },
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptatem natus neque eum pariatur nam hic qui repellat nostrum dolorem mollitia quos quasi, architecto necessitatibus accusantium quia ab? Temporibus, corrupti.'
        }
      ]
    },
    {
      id: 2,
      author: {
        name: 'Caio Magri',
        avatar:
          'https://avatars2.githubusercontent.com/u/26873791?s=400&u=caac3d548bf1b899e7619599ed4340f83b87f1e7&v=4'
      },
      date: '28 Fev 2020',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, laborum tempora! Est amet eum neque. Vero beatae laboriosam quidem magni itaque, nam cum fugit aspernatur nulla nostrum praesentium expedita modi impedit odio dolor nihil? Enim quibusdam incidunt ab optio voluptas amet tempore quae, nisi, perferendis obcaecati quis hic pariatur? Quasi maxime tenetur modi sunt commodi asperiores, expedita rem eos voluptatibus? Optio voluptatibus quia magni blanditiis ab! Pariatur quaerat esse amet quo accusamus nam debitis, dignissimos blanditiis aspernatur, nobis quia rem velit necessitatibus architecto quidem voluptatum. Sit voluptatum reprehenderit, exercitationem, beatae repellat eius deleniti dicta voluptas dolorem saepe minima necessitatibus officiis, id aut? Velit vero possimus temporibus similique consequuntur. Commodi error fugiat impedit pariatur dolorem id delectus beatae! Voluptate, dolorem reiciendis tenetur fugiat rerum accusamus fugit sit praesentium quam vero dignissimos veniam distinctio earum, debitis nobis itaque aliquam suscipit porro veritatis commodi. Fugit modi in laboriosam dolore distinctio nesciunt odit minima, tempora nulla. Sequi nihil voluptatum in quaerat adipisci veritatis, necessitatibus vel, debitis quidem repellat corrupti laborum perferendis excepturi ex hic animi dignissimos? Maiores sit, voluptas iusto quisquam mollitia dicta odit exercitationem fugit, illo asperiores, rem expedita natus placeat? Omnis odio magni consequatur aliquid facilis doloribus commodi nihil beatae nostrum ipsa.',
      comments: [
        {
          id: 2,
          author: {
            name: 'Rodolf Ruddi',
            avatar: 'https://api.adorable.io/avatars/100/abott@adorable.pngCopy'
          },
          content:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium iste eum accusamus nam, consequatur, praesentium laboriosam voluptatum exercitationem, iure quidem unde magnam voluptates quibusdam! Velit aperiam ratione, corporis nulla praesentium sunt quasi fugit tempore sapiente. Error explicabo, necessitatibus dolorem dolorum quae sed ipsum, optio perferendis perspiciatis totam vero, nesciunt unde rem consequatur? Fugit voluptatibus quibusdam non nisi quis ut sapiente natus voluptas a, veritatis voluptate nesciunt hic quos optio consequuntur tempora quod. Quaerat quas quod voluptatem libero optio enim repellat nulla consequuntur, repudiandae sit perspiciatis architecto vero blanditiis odit omnis. Aperiam quas hic consequuntur, sunt tenetur, dolor pariatur voluptas ea quaerat qui, odit perspiciatis ipsa. Quidem dignissimos quasi assumenda sapiente aperiam nobis odit repellendus architecto vero dicta facilis commodi facere placeat esse eius, dolorem obcaecati impedit unde tenetur excepturi a quis pariatur? Natus dolor voluptate voluptas distinctio earum ab magni dolores blanditiis, eveniet assumenda ex, tempora corporis fugit aperiam. Aspernatur repudiandae architecto provident, a fuga eveniet, accusantium, eligendi unde necessitatibus hic deleniti! Reprehenderit ducimus eos facere libero, voluptatem iure architecto, nostrum laudantium nihil ea delectus eligendi natus maxime provident. Deserunt iste quisquam aliquam suscipit quibusdam quaerat sit possimus voluptas reprehenderit, repellat cupiditate commodi, autem quis! Et earum harum iure explicabo modi quam commodi reprehenderit dolor? Nemo et dolorem odio, natus impedit necessitatibus blanditiis saepe minus voluptas doloribus praesentium in accusantium labore architecto laboriosam explicabo, eaque adipisci distinctio? Qui eligendi aperiam ab. Corporis accusantium modi voluptatem molestiae quaerat. Porro quia corporis in consequuntur commodi deleniti accusamus possimus quae voluptate dicta, earum, aspernatur illo optio cupiditate magni, facere quis? Autem, facere? Reiciendis alias error perferendis unde atque necessitatibus quae, quam numquam nesciunt! Quaerat sequi dolor magnam quis sapiente. Perferendis laborum quidem quos labore facilis quibusdam accusantium eius fugiat consectetur error deserunt vitae sapiente, commodi fuga quasi facere asperiores cupiditate. Magni, quas culpa.'
        }
      ]
    }
  ]);

  return (
    <Container>
      <ul>
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </ul>
    </Container>
  );
}
