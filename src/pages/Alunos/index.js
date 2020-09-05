import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaTrash } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, NovoAluno, BoxAluno } from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();

    const exclamation = e.currentTarget.nextSibling;
    exclamation.classList.add('show');
  };

  const handleHide = (e) => {
    const boxe = e.target.parentNode.parentNode;
    boxe.classList.add('reverseModal');
    setTimeout(() => {
      boxe.classList.remove('show');
      boxe.classList.remove('reverseModal');
    }, 100);
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <BoxAluno>
        <h1>Alunos</h1>
        <NovoAluno to="/aluno/">Criar novo aluno</NovoAluno>
      </BoxAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit className="edit" size={16} />
            </Link>

            <Link
              className="trash"
              onClick={handleDeleteAsk}
              to={`/aluno/${aluno.id}/delete`}
            >
              <FaTrash size={16} />
            </Link>

            <div className="box">
              <span className="mensagem">
                Você deseja realmente excluir este Aluno(a)
              </span>
              <div className="botoes">
                <button
                  className="sim"
                  type="button"
                  onClick={(e) => handleDelete(e, aluno.id, index)}
                >
                  Sim
                </button>
                <button
                  className="cancelar"
                  type="button"
                  onClick={(e) => handleHide(e)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
