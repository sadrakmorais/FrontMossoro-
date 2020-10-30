import React from 'react';
import { BackgroundI, Mossoro, Boxbottom} from './styles';
import Button from '../../components/Button';


const LandingPage = () =>{

    return(

        <BackgroundI>
            <Mossoro>
                <h1>Mossoró+</h1>
                <span>Encontre ou divulgue seu evento aqui</span>
            </Mossoro>

            <Boxbottom>
            <Button type='submit'>Login</Button>
            <Button type='submit'>Cadastrar</Button>

            </Boxbottom>


        </BackgroundI>

    )

}

export default LandingPage

