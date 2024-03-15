import React from "react"
import student from "../img/estudante.jpg"
import style from '../Editar_perfil/editarPerfil.css' 
import { Row, Col, Container, Nav, Navbar, Button, Form } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditarPerfil = () => {
    return (
        <> 
        <div className="Editar">

            <div className="Left">
            <h1>Editar Perfil</h1>
            <img className="estudante" src={student} />
            <p>JPG ou PNG com tamanho máximo de 2MB</p>
            <Button as="input" type="button" value="Alterar imagem" />{' '}
        </div>

        <div className="Right">
            <h2>Dados de Acesso</h2>
            <form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="email" placeholder="Insira seu nome completo" />
      </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Button as="input" type="button" value="Alterar e-mail " />{' '}
      <Button as="input" type="button" value="Alterar Senha" />{' '}
            </form>
        </div>

        </div>
        
        </>
      
        



    )
}
export default EditarPerfil;