import React, { useContext, useState } from 'react';
import * as Yup from 'yup';

import { PATCH } from '../../services/api';
import CapaEvent from '../CapaEvent';
import TitleEvent from '../TitleEvent';
import EndData from '../DataEvent/EndData';
import StartData from '../DataEvent/StartData';
import VacationEvent from '../VacationEvent';
import DescriptionEvent from '../DescriptionEvent';
import LocalizationEvent from '../Localization'
import Button from '../Button';

import {
	Container,
	FormContainer,
	InfoContainer,
	DataContainer,
	VacationsContainer,
	ContainerSubscribe,
    ContainerDescription,
    ContainerLocation,
} from './styles';

const SolicitationEvent = ({ event }) => {
	const [isAccepted, setIsAccepted] = useState(false);

    console.log(isAccepted);
    const HandleSubmitEvent = async (e) => {
    try {
        e.preventDefault();

        const payload = { isAccepted};

        await PATCH('/events/5fa32fa1c0d147136c0ace09', payload);



    } catch (error) {
        console.log(error);

        if (error instanceof Yup.ValidationError) {
            return alert('Preencha todos os campos corretamente');
        }

        const { status } = error.response;

        console.log(status)
    }
}


	return (
		<Container>
			<FormContainer onClick={HandleSubmitEvent}>
				<CapaEvent>
					{<img src={event.photo} alt='capa do evento' width='100%' height='100%' />}
				</CapaEvent>
				<InfoContainer>
					<TitleEvent>{event.name}</TitleEvent>
					<ContainerDescription>

						<DescriptionEvent>{event.description}</DescriptionEvent>
					</ContainerDescription>
                    <ContainerLocation>
                    <span>Local:</span>
                    <LocalizationEvent>{event.location}</LocalizationEvent>
                    </ContainerLocation>
					<DataContainer>
						<StartData>{new Date(event.period.start).toLocaleDateString()}</StartData>
						<EndData>{new Date(event.period.end).toLocaleDateString()}</EndData>
						<ContainerSubscribe>
							<Button
								style={{ background: ' #3498DB', width: '130%' }}
								onClick={() => setIsAccepted(!isAccepted)}>
								Aprovar Evento
							</Button>

						</ContainerSubscribe>
						<VacationsContainer>
							<VacationEvent>{event.vacancies}</VacationEvent>
						</VacationsContainer>
					</DataContainer>
				</InfoContainer>
			</FormContainer>
		</Container>
	);
};

export default SolicitationEvent;
