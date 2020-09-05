import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  background-image: linear-gradient(
    to right,
    ${primaryDarkColor},
    ${primaryColor}
  );
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  a {
    color: #fff;
    margin: 0 30px 0 0;
    transition: all .5s;
  }
    @media(max-width: 600px) {
      a {
        margin: 0 14px 0 0;
        transition: all .5s;
      }
  }
`;
