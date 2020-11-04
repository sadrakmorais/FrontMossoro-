import React from 'react';
import EventCard from '../../components/EventCard';
import { Container, Header, CardContainer } from './styles';

const Home = () => {
	return (
		<Container>
           <Header>Eventos Diponíveis</Header>
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

export default Home;
