import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const id = useSelector((state) => state.auth.user.id);
  const nomeStored = useSelector((state) => state.auth.user.nome);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <span className="nav homeee">Home</span>
      </Link>

      <Link to="/register">
        <span className="nav">{id ? 'Editar dados' : 'Crie sua conta'}</span>
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <span className="nav">Sair</span>
        </Link>
      ) : (
        <Link to="/login">
          <span className="nav">Login</span>
        </Link>
      )}

      <span className="nav">
        {id ? `Olá, ${nomeStored}` : 'Olá, visitante'}
      </span>
    </Nav>
  );
}
