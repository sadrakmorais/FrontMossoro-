import React, { useState} from 'react';
import * as Yup from 'yup';
import Axios from 'axios';

import Form from '../../components/Form'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, FormContainer} from './styles';

const SubmitEvents = () =>{

    const [name, setName] = useState('');

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [description, setDescription] = useState('');
    const [vacancies, setVacancies] = useState('');
    const [location, setLocation] = useState('');
    const [observations, setObservations] = useState('');
    const department = '5fa1e9a0819f2418040fffe4'

    const HandleSubmitEvent = async (e) =>{
        try{e.preventDefault();
        const payload = { name, start, end,description,vacancies,location,observations,department };
        await Axios.post('http://localhost:3000/api/v1/events', payload);
        const validationSchema = Yup.object().shape({
            name: Yup.string().required(),
            start: Yup.date().required(),
            end: Yup.date().required(),
            description: Yup.string().required(),
            vacancies: Yup.number().required(),
            location: Yup.string().required(),
            observations: Yup.string(),
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

            case 500:
                return alert('Ocorreu um erro que não conseguimos lidar.');
            default:
                return alert('API deu o prego');
        }
    }




    }

    return (
        <Container>

            <FormContainer>
                <h1>INFORMAÇÕES DO EVENTO</h1>
                <Form onSubmit={HandleSubmitEvent}>
            <Input label="Nome do Evento" value={name} onChange={(e) => setName(e.target.value)} ></Input>
             <span>Duração</span>
            <Form>
            <Input label="Inicio" type="date"value={start} onChange={(e) => setStart(e.target.value)} ></Input>
            <Input label="Fim" type="date"value={end} onChange={(e) => setEnd(e.target.value)} ></Input>
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
