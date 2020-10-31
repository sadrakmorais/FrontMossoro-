import React, { useState} from 'react';

import Form from '../../components/Form'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer , Aluno} from './styles';




const Register = () =>{


    const [aluno, setIsAluno] = useState(false);
    const [cpf, setCPF] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('');


    return (
        <Container>

            <FormContainer>
                <h1>Cadastro Usuário</h1>
                <Form>
            <Input label="Nome completo" value={name} onChange={(e) => setName(e.target.value)} ></Input>
            <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
            <Input label="CPF" value={cpf} onChange={(e) => setCPF(e.target.value)} ></Input>
            <Input label="Celular" value={phone} onChange={(e) => setPhone(e.target.value)} ></Input>
            <Input label="Senha" type='password'value={password} onChange={(e) => setPassword(e.target.value)} ></Input>
            <Aluno>
            <input type='checkbox'checked={aluno} onChange={() => setIsAluno(!aluno)}/>
			<label>É aluno da UERN?</label>
            </Aluno>

            <Input label="Curso" value={course} onChange={(e) => setCourse(e.target.value)} ></Input> <br/>
            <Button type='submit'>Finalizar Cadastro</Button>
            </Form>

            </FormContainer>

        </Container>

    );

}

export default Register
