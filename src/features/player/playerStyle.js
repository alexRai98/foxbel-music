import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/core';

export const ContainerPlayer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  background: #eb5757;
  height: 100px;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;

export const ContainerVolumen = styled(Flex)`
  align-items: center;
  padding-right: 20px;
  svg {
    font-size: 30px;
  }
  @media (min-width: 425px ) {
    padding-right: 0px;
  }
`;

export const ContainerControls = styled(Flex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ContainerPlay = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 36px;
  }
`;

export const ButtomPlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff7676;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 10px 10px 5px 10px;
  cursor: pointer;
  svg {
    font-size: 16px;
  }

  &:hover {
    background: rgba(255, 118, 118, 0.4);
  }
`;
