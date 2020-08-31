import { useState, useEffect } from 'react'
import { getProductos } from '../helpers/getProductos';


export const useFetchProductos = ( producto ) => {
    
    console.log('Productos XXXX: ', producto);
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getProductos( producto )
            .then( prds => {
                
                setState({
                    data: prds,
                    loading: false
                });
            })

    }, [producto])


    return state; // { data:[], loading: true };
}


