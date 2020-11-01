import styled from 'styled-components';

export const ContainerEventCard = styled.div`
	border-radius: 8px;

	border: 1px solid #c3c3c3;
	box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
	display: flex;
	padding: 15px;
	align-items: flex-start;
`;

export const EventImage = styled.div`
	max-width: 10px;
	margin-right: 20px;
    display: flex;
`;

export const EventTitle = styled.h1`
	font-size: 16px;
	color: #2c3e50;
`;
export const EventDescription = styled.span`
	font-size: 16px;
	color: black;
`;

export const EventVacations = styled.span`
	font-size: 20px;
	font-weight: 700;
	color: #3498db;
`;

export const EventCardFooter = styled.footer`
	display: flex;
	align-items: center;
`;

export const EventDate = styled.span`
	color: #95a5a6;
	font-weight: 700;
`;
