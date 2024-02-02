import { useContext } from "react"
import { UserContext } from "./context";

export const LoginPage = () => {


  const { user, setUser } = useContext(UserContext);


  return (
    <>
      <div>LoginPage</div>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button onClick={() => setUser({ id: 123, name: 'Argemiro Ermitage' })} type="button">Establecer usuario</button>
    </>

  )
}
