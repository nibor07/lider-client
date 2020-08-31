import { getProductos } from '../../helpers/getProductos';
jest.mock('../../config/clienteAxios');

describe('Pruebas con getProductos Fecth', () => {
    
    test('debe de traer 10 elementos', async() => {
        const productos = [{
            id: 1,
            price: 345,
            brand: 'Samsung',
            url: 'https://localhost/cualquier/cosa.jpg',
            description: 'Edge 7'
        },
        {
            id: 2,
            price: 145,
            brand: 'Xiaomi',
            url: 'https://localhost/cualquier/cosa.jpg',
            description: 'Xiaomi mi8'
        }];

        clienteAxios.mockReturnValue({
            data: productos,
            loading: false
        });

        const productos = await getProductos('vang');

        expect( productos.length ).toBe( 10 );

    })

    /*
    test('debe de traer 10 elementos', async() => {
        
        const productos = await getProductos('');

        expect( productos.length ).toBe( 0 );

    })*/    

})