
import clienteAxios from '../config/axios';

export const getProductos = async( producto ) => {
    let productos;
    //console.log("PR==>producto: ", producto);

    try {
        //busqueda
        let data = {search: producto};
        const respuesta = await clienteAxios.post('/api/buscar', data);
        console.log("respuesta: ", respuesta.data.productos);
        console.log("respuesta: ", respuesta.data.codigo);
        
        if(respuesta && respuesta.data.codigo === "00"){
            productos = respuesta.data.productos.map( producto => {
                return {
                    id: producto.id,
                    brand: producto.brand,
                    description: producto.description,
                    url: producto.image?producto.image:'',
                    price:producto.price
                }
            })
        
        }else{

        }
        
    } catch (error) {
        console.log(error);
    }
    console.log('productos:', productos);
    return productos;
}