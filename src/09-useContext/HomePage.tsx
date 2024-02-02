import { useContext } from "react";
import { UserContext } from "./context";

export const HomePage = () => {


  const { user } = useContext(UserContext);



  return (
    <>
      <div>HomePage {user?.name}</div>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}
