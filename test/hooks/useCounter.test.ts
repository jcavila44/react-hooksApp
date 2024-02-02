import { act, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks';


describe('Pruebas en useCounter', () => {

    const initialCounter = 100;


    test('Debe retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter()); //Sirve para renderizar el hook como tal

        const { counter, increment, decrement, reset, } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });



    test('Debe retornar los valores de 100 con su valor inicial', () => {


        const { result } = renderHook(() => useCounter(initialCounter)); //Sirve para renderizar el hook como tal

        const { counter } = result.current;

        expect(counter).toBe(initialCounter);

    });


    test('Debe de incrementar el contador', () => {

        const { result } = renderHook(() => useCounter(initialCounter)); //Sirve para renderizar el hook como tal

        const { increment } = result.current;

        act(() => {
            increment(2);
            increment(2);
        }); //act: Sirve para ejecutar una funcion de un hook

        expect(result.current.counter).toBe(104); //PAra validar el valor atualizado se debe capturar directamente del result.current


    });

    test('Debe de decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(initialCounter)); //Sirve para renderizar el hook como tal

        const { decrement } = result.current;

        act(() => {
            decrement(2);
            decrement(2);
        }); //act: Sirve para ejecutar una funcion de un hook

        expect(result.current.counter).toBe(96); //PAra validar el valor atualizado se debe capturar directamente del result.current

    });

    test('Debe de resetear el contador', () => {

        const { result } = renderHook(() => useCounter(initialCounter)); //Sirve para renderizar el hook como tal

        const { decrement, reset, increment } = result.current;

        act(() => {
            decrement(2);
            increment(222);

            reset();
        }); //act: Sirve para ejecutar una funcion de un hook

        expect(result.current.counter).toBe(initialCounter); //PAra validar el valor atualizado se debe capturar directamente del result.current

    })

})