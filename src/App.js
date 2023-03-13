import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllExercisesPage from "./pages/AllExercises";
import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import NewExercisePage from "./pages/NewExercise";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <LoginPage />
        </Route>
        <Route path='/create-user' exact>
          <CreateUserPage />
        </Route>
        <Route path='/new-exercise' exact>
          <NewExercisePage />
        </Route>
        <Route path='/exercises-logged' exact>
          <AllExercisesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
