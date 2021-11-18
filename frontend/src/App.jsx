import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



//странички и компоненты испорт
import Homepage from "./pages/homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";


function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Switch>
        
      </Switch>
    </div>
  );
}

export default App;
