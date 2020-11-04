import React, { useState,useEffect} from 'react';
import Axios from 'axios';
import * as Yup from 'yup';

import Form from '../../components/Form'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer , Aluno} from './styles';




const Register = () =>{


    const [isStudent, setIsAluno] = useState(false);
    const level = 1
    const [cpf, setCPF] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const course = '5fa20a55819f2418040ffffe'
    const registration = '123456'



    const HandleRegister = async (e) =>{
        try{e.preventDefault();
        const payload = { course, level, name,cpf,registration,isStudent,email,password,phone };
        await Axios.post('http://localhost:3000/api/v1/users', payload);
        const validationSchema = Yup.object().shape({
            email: Yup.string().required(),
            cpf: Yup.string().required(),
            password: Yup.string().required(),
        });

        await validationSchema.validate(payload);
    }catch (error) {
        if (error instanceof Yup.ValidationError) {
            return alert('Preencha todos os campos corretamente');
        }

        const { status } = error.response;

        switch (status) {
            case 400:
                return alert('Campos inválidos');
            case 409:
                return alert('CPF já está em uso');
            case 404:
            return alert('Curso não encontrado');
            case 500:
                return alert('deu ruim');
            default:
                return alert('API deu o prego');
        }
    }




    }



    return (
        <Container>

            <FormContainer>
                <h1>Cadastro Usuário</h1>
                <Form onSubmit={HandleRegister}>
            <Input label="Nome completo" value={name} onChange={(e) => setName(e.target.value)} ></Input>
            <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></Input>
            <Input label="CPF" value={cpf} onChange={(e) => setCPF(e.target.value)} ></Input>
            <Input label="Celular" value={phone} onChange={(e) => setPhone(e.target.value)} ></Input>
            <Input label="Senha" type='password'value={password} onChange={(e) => setPassword(e.target.value)} ></Input>
            <Aluno>
            <input type='checkbox'checked={isStudent} onChange={() => setIsAluno(!isStudent)}/>
			<label>É aluno da UERN?</label>
            </Aluno>
            <span>Escolha seu curso</span>
            <select name="SelectCourse" id="SelectCourse">
                <optgroup label="FANAT">
                <option value="">Ciências Biológicas (Bach.)</option>
                <option value="">Ciências Biológicas (Lic.)</option>
                <option value="">Ciência da Computação</option>
                <option value="">Física</option>
                <option value="">Química</option>
                <option value="">Matématica</option>
                </optgroup>
                <optgroup label='FACEM'>
                <option value="">Administração</option>
                <option value="">Ciência Contábeis</option>
                <option value="">Ciência Econômicas</option>
                <option value="">Gestão Ambiental</option>
                <option value="">Turismo</option>
                </optgroup>
                <optgroup label='FALA'>
                <option value="">Letras (Língua Portuguesa)</option>
                <option value="">Letras (Língua Inglesa)</option>
                <option value="">Letras (Língua Espanhola)</option>
                <option value="">Música</option>
                </optgroup>
                <optgroup label='FAFIC'>
                <option value="">Ciência Sociais (Bach.)</option>
                <option value="">Ciência Sociais (Lic.)</option>
                <option value="">Comunicação Social (Jornalismo)</option>
                <option value="">Comunicação Social (Publicidade e Propaganda)</option>
                <option value="">Comunicação Social (Radialismo)</option>
                <option value="">Filosofia</option>
                <option value="">Geografia</option>
                <option value="">História</option>
                </optgroup>
                <optgroup label='FASSO'>
                <option value="">Serviço Social</option>
                </optgroup>
                <optgroup label='FE'>
                <option value="">Pedagogia</option>
                </optgroup>
                <optgroup label='FAEF'>
                <option value="">Educação Física (Bach.)</option>
                <option value="">Educação Física (Lic)</option>
                </optgroup>
                <optgroup label='FAEN'>
                <option value="">Enfermagem</option>
                </optgroup>
                <optgroup label='FAD'>
                <option value="">Direito</option>
                </optgroup>
                <optgroup label='FACS'>
                <option value="">Medicina</option>
                </optgroup>
            </select>



            <Button type='submit'>Finalizar Cadastro</Button>
            </Form>

            </FormContainer>

        </Container>

    );

}

export default Register
