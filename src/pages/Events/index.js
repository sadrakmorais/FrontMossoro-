import React from 'react';
import EventCard from '../../components/EventCard';
import { Container, Header, CardContainer } from './styles';

const Events = () => {
	return (
		<Container>
           <Header>Seus eventos</Header>
           <CardContainer>
               <li>
               <EventCard></EventCard>
               <EventCard></EventCard>
               <EventCard></EventCard>
               <EventCard></EventCard>
               <EventCard></EventCard>
               </li>
           </CardContainer>


		</Container>
	);
};

export default Events;
