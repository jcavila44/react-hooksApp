import { useRef } from "react"

export const FocusScreen = () => {


  const inputRef = useRef();

  const onClickInputRef = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} type="text" placeholder="Ingrese su nombre" className="form-control" />
      <button className="btn btn-info" onClick={onClickInputRef} type="button">Seleccionar</button>
    </>

  )
}
