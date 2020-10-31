import React, { useState} from 'react';

import Form from '../../components/Form'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer} from './styles';

const SubmitEvents = () =>{

    const [name, setName] = useState('');
    const [period, setPeriod] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [description, setDescription] = useState('');
    const [vacancies, setVacancies] = useState('');
    const [location, setLocation] = useState('');
    const [observations, setObservations] = useState('');



    return (
        <Container>

            <FormContainer>
                <h1>INFORMAÇÕES DO EVENTO</h1>
                <Form>
            <Input label="Nome do Evento" value={name} onChange={(e) => setName(e.target.value)} ></Input>
            <Input label="Duração" value={period} onChange={(e) => setPeriod(e.target.value)} ></Input>
            <Form>
            <Input label="Inicio" value={start} onChange={(e) => setStart(e.target.value)} ></Input>
            <Input label="Fim" value={end} onChange={(e) => setEnd(e.target.value)} ></Input>
            </Form>
            <Input label="Descrição"value={description} onChange={(e) => setDescription(e.target.value)} ></Input>

            <Input label="Vagas" value={vacancies} onChange={(e) => setVacancies(e.target.value)} ></Input>
            <Input label="Localização" value={location} onChange={(e) => setLocation(e.target.value)} ></Input>
            <Input label="Observações" value={observations} onChange={(e) => setObservations(e.target.value)} ></Input>
            <br/>
            <Button type='submit'>SOLICITAR</Button>
            </Form>

            </FormContainer>

        </Container>

    );

}

export default SubmitEvents
