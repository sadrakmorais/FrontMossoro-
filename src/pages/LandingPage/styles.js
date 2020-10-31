import styled, { css } from 'styled-components';
import img from '../../assets/backGround.png'

export const BackgroundI = styled.div`
position: fixed;
min-width: 100%;
min-height: 100%;
background-image: url('${img}');
background-size: cover;
background-position: center;



`;
export const Mossoro = styled.section`
h1 {
		font-size: 200px;
		color: rgba(255, 255, 255, 1);
        margin-bottom: 5px;
        justify-content: center;
        display: flex;
        margin-top:100px;

        font-family: 'Inconsolata';
	}
    span{
        font-size: 18px;
		color: rgba(255, 255, 255, 1);
        margin-bottom: 12px;
        justify-content: center;
        display: flex;
        margin-top:5px;

        font-family: 'Inconsolata';
    }

`
export const Boxbottom = styled.div`
width:300px;
height:200px;
display: flex;
align-items: center;
margin-left:800px;


`


export const Container = styled.aside`
	flex: 0.2;
	background: #fff;
	height: 100%;
	padding: 24px;
	border-right: 1px solid #ccc;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Menu = styled.nav`
	width: 100%;
	margin-top: 48px;
`;

export const MenuLink = styled.li`
	border-radius: 4px;
	margin: 4px 0;
	transition: 100ms;
	display: flex;

	& > a {
		padding: 10px 12px;
		cursor: pointer;
		font-size: 17px;
		color: rgba(50, 50, 50);
		flex: 1;
		border-radius: 4px;
	}

	&:hover {
		background: #f3f3f3;
	}

	${({ active }) =>
		active &&
		css`
			& > a {
				background: rgba(0, 116, 232);
				color: #ffffff;
			}
		`}
`;

