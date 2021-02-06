import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
    Container, 
    SearchWrapper, 
    SearchInput, 
    SearchIcon, 
    Body 
} from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>

          <StickyBox>
            <Body>
                <List 
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion 
                            name="Edu do Feudo"
                            nickname="@OChesu"
                        />,
                        <FollowSuggestion 
                            name="aKaDrain, o Visão"
                            nickname="@Gui_Reichert0"
                        />,
                        <FollowSuggestion 
                            name="matheus"
                            nickname="@artanys_"
                        />,
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[ <News />, <News />, <News /> ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[ <News />, <News />, <News /> ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[ <News />, <News />, <News /> ]}
                />
            </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;