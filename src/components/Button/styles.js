import styled from 'styled-components';

export const Container = styled.button`
	height: 38px;
	text-align: center;
	background: rgba(0, 116, 232);
	cursor: pointer;
	transition: 300ms;
	color: #fff;
	font-size: 16px;
	display: flex;
	align-items: center;
    border-radius: 4px;
	justify-content: center;

	&:hover {
		background: rgba(40, 16, 232);
	}
`;
