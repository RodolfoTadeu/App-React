import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  .box {
    background-color: #fff;
    padding: 50px;
    text-align: center;
    font-size: 20px;
    border-radius: 4px;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
    align-content: center;
    justify-content: center;
    display: none;
    position: absolute;
    animation: upInDown 0.3s ease-in-out;
    animation-duration: 0.3s;
    animation-fill-mode: backwards;

    @media(max-width: 600px) {
      width:290px;
      padding: 10px 0;
    }
  }

  @keyframes upInDown {
    0% {
      transform: translateY(-3rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes DownInup {
    0% {
      transform: translateY(-3rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .mensagem {
    color: #3d3d3d;
    font-size: 16px;
    @media(max-width: 600px) {
      font-size: 14px;
    }
  }

  .show {
    display: block;
    transition: all 1s;
  }

  .hide {
    display: none;
  }
  .reverseModal {
    animation: DownInup 0.3s ease-in-out reverse;
    animation-duration: 0.2s;
    animation-fill-mode: backwards;
  }
  .botoes {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
  }
  .sim {
    background-color: #0da9ef;
  }
  .sim:hover {
    background-color: #0c88c0;
  }

  .cancelar {
    background-color: #ccc;
  }

  .cancelar:hover {
    background-color: #a1a1a1;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  .circle {
    fill: #ccc;
  }

  .edit {
    color: #1290eb;
    margin-right: 15px;
  }

  .trash {
    color: #fc3930;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  padding: 10px 10px;
  background-color: #0cacef;
  border-radius: 4px;
  color: #fff;
`;

export const BoxAluno = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
