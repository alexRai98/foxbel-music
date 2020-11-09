import styled from '@emotion/styled'

export const Nav = styled.nav`
  display:flex;
  align-items: center;
  padding: 20px 20px 30px 20px;
  justify-content: space-between;
  @media (min-width: 1024px) {
    padding: 40px 40px 30px 40px;
  }
`;

export const FormSearch = styled.form`
  display:flex;
  align-items: center;
  border: 1px solid #828282;
  border-radius: 100px;
  max-width: 524px;
  height: 36px;
  justify-content: space-between;
  padding: 0 10px;

  input{
    border:none;
    outline: none;
  }
  @media(min-width:768px){
    width: 100%;
  }
`