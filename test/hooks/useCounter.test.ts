import { renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks';


describe('Pruebas en useCounter', () => {

    test('Debe retornar los valores por defecto', () => {


        const { result } = renderHook(() => useCounter());

        console.log(result);




    });

})