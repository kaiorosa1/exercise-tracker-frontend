import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllExercisesPage from "./pages/AllExercises";
import NewExercisePage from "./pages/NewExercise";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
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
