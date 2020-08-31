import React from 'react';
import { shallow } from 'enzyme'
import { Producto } from '../../components/Producto';

describe('Tests de <Producto />', () => {
    
    const producto = {  url: "wwww.test.cl/1.jpg",
                        brand: "Televisor DAEWOO",
                        price: "123"                        
                    };
    
    const wrapper = shallow( <Producto producto={ producto } /> );

    test('debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el brand del producto buscado', () => {
        
        const hdos = wrapper.find('p');
        expect( hdos.text().trim() ).toBe( producto.price );

    })

    *test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        // console.log( img.prop('src') )
        expect( img.prop('src') ).toBe( "https://"+producto.url );
        expect( img.prop('alt') ).toBe( "https://"+producto.url );

    });


    /*test('debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    })*/
    
})
