import React from 'react';

import { 
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>jungkook</strong>
            <span>@th_ambtn</span>
            <Dot />
            <time>5 de fev</time>
          </Header>

          <Description>Teste</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              32
            </Status>
            <Status>
              <RetweetIcon />
              72
            </Status>
            <Status>
              <LikeIcon />
              204
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;