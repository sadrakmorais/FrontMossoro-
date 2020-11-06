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
} from './styles';



const MyEvents = ({ event }) => {

    return (
		<Container>
			<FormContainer>
				<CapaEvent>
					{
						<a href='https://images.sympla.com.br/5f96f4d174434.png' target='_blank'>
							<img
								src={event.photo}
								alt='capa do evento'
								width='100%'
								height='100%'
							/>
						</a>
					}
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
						<ContainerSubscribe></ContainerSubscribe>
						<VacationsContainer>
							<VacationEvent>{event.vacancies}</VacationEvent>
						</VacationsContainer>
					</DataContainer>
				</InfoContainer>
			</FormContainer>
		</Container>
	);
};

export default MyEvents;
