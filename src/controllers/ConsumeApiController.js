export async function GET(ruta)
{
    try
    {
        var token = 'Bearer '+ localStorage.getItem('token');

        let response = await fetch(
            ruta,
            {
                method : 'GET',
                headers : 
                {
                    'Accept' : 'application/json',
                    'Authorization' : token,
                }
            }
        );

        let responseJson = await response.json();
        //console.log(responseJson);

        if(responseJson.success === true )
        {
            return responseJson;
        }

        if(responseJson.success === false)
        {
            return responseJson.message;
        }

    }
    catch(error)
    {
        return error;
    }
}


export async function POST(ruta,parametros)
{
    try 
    {
        var token = 'Bearer '+localStorage.getItem('token');

        let params = new FormData();

        parametros.forEach((p)=>{
            params.append(p.name,p.value);
        });

        let response = await fetch(
            ruta,
            {
                method : 'POST',
                headers : 
                {
                    'Accept' : 'application/json',
                    'Authorization' : token,
                },
                body : params
            }
        );

        let responseJson = await response.json();

        if(responseJson.success === true)
        {
            return responseJson;
        }

        if(responseJson.success === false)
        {
            return responseJson;
        }
        
    } 
    catch (error) 
    {
        return error;
    }
}
