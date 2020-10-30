import styled from 'styled-components';
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


