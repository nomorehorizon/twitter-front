import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>jungkook</h1>
        <h2>@th_ambtn</h2>

        <p>
          programador | ilustrador | comunista
        </p>

        <ul>
          <li>
            <LocationIcon />
            Curitiba, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de dezembro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>490</strong>
          </span>
          <span>
            <strong>73 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;