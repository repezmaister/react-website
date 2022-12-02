import ROUTES from '../navigation/routes';
import { GET, POST } from './ConsumeApiController';

export async function SendContactUsEmail(nombres,apellidos,telefono,correo,asunto,mensaje)
{
    console.log('Iniciando el envio de correo')
    let params = [
        {name:'nombres',value:nombres},
        {name:'apellidos',value:apellidos},
        {name:'telefono',value:telefono},
        {name:'correo',value:correo},
        {name:'asunto',value:asunto},
        {name:'mensaje',value:mensaje}
    ];
    console.log('Los parametros son los siguientes ===> ',params);
    let response = await POST(ROUTES.CONTACTUS.SendContactUsEmail,params);
    console.log('Response ===> ',response)
    return response;
}
