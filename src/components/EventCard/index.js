import React, { useContext } from 'react';
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

import { AuthContext } from '../../store/Auth';

const EventCard = ({ event }) => {
	const { user } = useContext(AuthContext); // user é quem ta logado

	const handleSubscribe = async () => {
		try {
			const idDeQuemTaLogado = user._id;
			const idDoEvento = event._id;

			return console.log({ idDeQuemTaLogado, idDoEvento });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<FormContainer>
				<CapaContainer>
					<CapaEvent>
						{
							<a
								href={event.photo}
								target='_blank'>
								<img src={event.photo} alt='capa do evento' style={{width:'100%',height:'22vh'}} />
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
								style={{ background: ' #3498DB', width: '150px' }}
								onClick={handleSubscribe}>
								Inscrever-se
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

export default EventCard;
