import React, { useState} from 'react';


import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer , Aluno , Header } from './styles';




const Home = () =>{

    const [aluno, setIsAluno] = useState(false);

    return (
        <Container>
            <Header></Header>
            <FormContainer>
                <h1>CADATRO USUARIO</h1>
            <Input label="Nome completo"></Input>
            <Input label="Email"></Input>
            <Input label="Email"></Input>
            <Aluno>
            <input
							type='checkbox'
							checked={aluno}
							onChange={() => setIsAluno(!aluno)}
						/>
						<label>É aluno da UERN?</label>


            </Aluno>
            <Button type='submit'>Finalizar Cadastro</Button>

            </FormContainer>

        </Container>

    );

}

export default Home
