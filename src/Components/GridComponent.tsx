import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import book from '../images/book.svg';
import write from '../images/write.svg';
import { RootState } from '../store';
import { BoxType, MomentType } from '../types/BoxType';
import BoxComponent from './BoxComponent';
import BoxTime from './BoxTime';
import { FlexDiv } from './Utils';

type currentSelect = {
  active: boolean;
  timeChange: boolean
  moment: MomentType;
};

export default function GridComponent() {
  const grid:BoxType[] = [
    ['lectura', book],
    ['escritura', write],
  ];

  const { timeChange } = useSelector((state:RootState) => state.current as currentSelect);
  function renderBoxes() {
    return grid.map(([text, image]) => <BoxComponent text={text} image={image} key={text} />);
  }

  function renderTime() {
    return grid.map(([text, image]) => <BoxTime text={text} image={image} key={text} />);
  }
  return (
    <GridContainer flexDirection="column" alignItems="center">
      <BoxContainers>
        <GridBoxes>
          { timeChange ? renderTime() : renderBoxes() }
        </GridBoxes>
      </BoxContainers>
    </GridContainer>
  );
}

const BoxContainers = styled(FlexDiv)`
  padding: ${({ theme }) => `0 ${theme.Spacings[2]}`};
`;

const GridBoxes = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.Spacings[3]};
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const GridContainer = styled(FlexDiv)`
  width: 100%;
`;
