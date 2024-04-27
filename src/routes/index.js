import React from 'react';
import { Switch } from 'react-router-dom';
// import { toast } from 'react-toastify';
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} />
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/register/" component={Register} />
      <MyRoute exact path="/login/" component={Login} />

      <MyRoute exact path="*" component={Page404} />
    </Switch>
  );
}
