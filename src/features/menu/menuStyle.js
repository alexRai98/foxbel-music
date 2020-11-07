import styled from '@emotion/styled';

export const LogoImagen = styled.img`
  padding: 0 40px;
`;

export const ContainerMenu = styled.aside`
  background: #662323;
  width: 330px;
  height: 100vh;
  padding-top: 50px;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
`;

export const ContainerIconClose = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  color: #ffffff;
  font-size: 25px;
  cursor: pointer;
  display:flex;
  align-items:center;
  &:hover{
    padding: 4px;
    border: 1px solid #e86060;
    background: rgba(232, 96, 96,0.3);
    border-radius: 50%;
  }
`;

export const TitleMenu = styled.h2`
  font-size: 22px;
  line-height: 27px;
  color: #ffffff;
  margin: 30px 0 0 40px;
`;

export const ItemMenu = styled.li`
  list-style: none;
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
  padding-left: 40px;
  &:hover {
    border-left: 5px solid #e86060;
    padding-left: 35px;
    a {
      color: #e86060;
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
