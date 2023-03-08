import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewExercisePage from "./pages/NewExercise";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <NewExercisePage />
        </Route> 
      </Switch>
    </Layout>
  );
}

export default App;
