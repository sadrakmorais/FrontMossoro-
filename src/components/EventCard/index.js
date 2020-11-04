import React, { useContext } from 'react';
import CapaEvent from '../CapaEvent';
import TitleEvent from '../TitleEvent';
import EndData from '../DataEvent/EndData';
import StartData from '../DataEvent/StartData';
import VacationEvent from '../VacationEvent';
import DescriptionEvent from '../DescriptionEvent';

import {
	Container,
	FormContainer,
	InfoContainer,
	DataContainer,
	VacationsContainer,
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
			<button style={{ background: 'red' }} onClick={handleSubscribe}>
				INSCREVER-SE
			</button>
			<FormContainer>
				<CapaEvent>
					{
						<img
							src='https://images.sympla.com.br/5f96f4d174434.png'
							alt='teste'
							width='100%'
						/>
					}
				</CapaEvent>
				<InfoContainer>
					<TitleEvent>{event.name}</TitleEvent>
					<DescriptionEvent>{event.description}</DescriptionEvent>
					<DataContainer>
						<StartData>{new Date(event.period.start).toLocaleDateString()}</StartData>
						<EndData>{new Date(event.period.end).toLocaleDateString()}</EndData>
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
