import React from 'react';

import {
	ContainerEventCard,
	EventImage,
	EventTitle,
	EventDate,
	EventVacations,
	EventCardFooter,
	EventDescription,
} from './styles';

const EventCard = ({ ...rest }) => {
	return (
		<ContainerEventCard>
			<EventImage>
				<img
					src='https://images.sympla.com.br/5f96f4d174434.png'
					alt='n binario'
				/>
			</EventImage>
			<EventTitle>N Binario</EventTitle>
			<EventDescription> Vai ser babado</EventDescription>
            <EventCardFooter>
				<span>Entre </span>
				<EventDate> 10/75/7887</EventDate>
				<span>e</span>
				<EventDate>11/75/7887</EventDate>
				<EventVacations> 2 vagas</EventVacations>
			</EventCardFooter>
		</ContainerEventCard>
	);
};

export default EventCard;
