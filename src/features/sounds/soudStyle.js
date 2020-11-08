import styled from '@emotion/styled';

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Slider = styled.div`
  position: absolute;
  background: rgba(232, 96, 96, 0.3);
  height: 100%;
  width: 100%;
  color: #ffffff;
  padding: 20px;
`;

export const PlayDetails = styled.div`
  position: absolute;
  top: 89px;
  right: 156px;
  color: white;
  font-size: 72px;
`;

export const ImageAlbum = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 27px;
  font-weight: bold;
`;

export const Button = styled.button`
  background: #e86060;
  border: 1px solid #e86060;
  border-radius: 100px;
  height: 31px;
  width: 117px;
  color: #ffffff;
`;
