/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { FlexDiv, MainContainer } from '../Components';
import ChangeTime from '../Components/ChangeTime';
// import ButtonStart from '../Components/ButtonStart';
import GridComponent from '../Components/GridComponent';
import ProgressBar from '../Components/ProgressBar';
import TitleComponent from '../Components/TitleComponent';

export default function Home() {
  return (
    <MainContainer className="josefin-font text bg-blue2 text-white1 bg-bg-texture">
      <Nav>
        <TitleComponent />
      </Nav>
      <FlexDiv flexDirection="column" alignItems="center">
        <GridComponent />
        <div className="pt-6">
          <ChangeTime />
        </div>
        <div className="py-6 w-10/12">
          <ProgressBar />
        </div>
      </FlexDiv>
    </MainContainer>
  );
}

const Nav = styled.nav``;
