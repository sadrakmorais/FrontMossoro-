import React from 'react';


import { PATCH } from '../../services/api';
import CapaEvent from '../CapaEvent';
import TitleEvent from '../TitleEvent';
import EndData from '../DataEvent/EndData';
import StartData from '../DataEvent/StartData';
import VacationEvent from '../VacationEvent';
import DescriptionEvent from '../DescriptionEvent';
import LocalizationEvent from '../Localization';
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
    CapaContainer,
} from './styles';

const SolicitationEvent = ({event}) => {

	const handleAcceptEvent = async () => {
		try {
			const payload = { isAccepted: true };
			const {
				data: { event :  newEvent},
            } = await PATCH(`/events/${event._id}`, payload);
            alert('Avento Aceito')
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<FormContainer >
            <CapaContainer>
					<CapaEvent>
						{
							<a
								href='https://images.sympla.com.br/5f96f4d174434.png'
								target='_blank'>
								<img src={event.photo} alt='capa' width='100%' height='100%' />
							</a>
						}
					</CapaEvent>
				</CapaContainer>
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
								style={{ background: ' #3498DB', width: '130%', }}
								onClick={handleAcceptEvent}>
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
