import LoginForm from "../components/auth/LoginForm";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

function LoginPage() {
    const authCtx = useContext(AuthContext);

    if(authCtx.isLoggedIn){
        return (
            <section>
              <h2>Welcome {authCtx.user.username}!!</h2>
              <p>Look at the exercise logged tab to see your exercises</p>
            </section>
          );    
    }
    return (
        <div>
            <LoginForm login={authCtx.loginUser} />
        </div>
    );
}

export default LoginPage;