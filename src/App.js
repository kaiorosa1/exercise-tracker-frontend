import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllExercisesPage from "./pages/AllExercises";
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
          <h1>Create user Component</h1>
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
