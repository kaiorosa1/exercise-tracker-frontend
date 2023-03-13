import CreateUserForm from "../components/auth/CreateUserForm";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

function CreateUserPage() {
    const authCtx = useContext(AuthContext);

    if(authCtx.isLoggedIn){
        return (
            <section>
              <h2>Welcome {authCtx.user.username}!!</h2>
              <p>You are already logged as {authCtx.user.username} </p>
            </section>
          );    
    }
    return (
        <div>
            <CreateUserForm createUser={authCtx.createUser} />
        </div>
    );
}

export default CreateUserPage;