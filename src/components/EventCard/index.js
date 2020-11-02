import React from 'react';
import CapaEvent from '../CapaEvent'
import TitleEvent from '../TitleEvent'
import EndData from '../DataEvent/EndData'
import StartData from '../DataEvent/StartData'
import VacationEvent from '../VacationEvent'
import DescriptionEvent from '../DescriptionEvent'

import {
    Container,
    FormContainer,
    InfoContainer,
    DataContainer,
    VacationsContainer
} from './styles';

const EventCard = ({ ...rest }) => {

	return (
        <Container>

            <FormContainer>
            <CapaEvent>{<img src="https://images.sympla.com.br/5f96f4d174434.png" alt="teste" width="100%"/>}</CapaEvent>
            <InfoContainer>
            <TitleEvent></TitleEvent>
            <DescriptionEvent></DescriptionEvent>
            <DataContainer>
                <StartData></StartData>

                <EndData></EndData>
            <VacationsContainer>
                <VacationEvent></VacationEvent>
            </VacationsContainer>
            </DataContainer>

            </InfoContainer>
            </FormContainer>
        </Container>

    )
};

export default EventCard;
