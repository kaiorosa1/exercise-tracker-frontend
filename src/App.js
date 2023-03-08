import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <h1>Hello exercise-tracker frontend app</h1>
        </Route> 
      </Switch>
    </Layout>
  );
}

export default App;
