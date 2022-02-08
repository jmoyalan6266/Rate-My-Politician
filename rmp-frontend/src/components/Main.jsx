import { Route, Switch } from "react-router";
import About from "./About/About";
import Splash from "./Splash/Splash";
import Visualizations from "./Visualizations/Visualizations";
import StateInstance from "./States/StateInstance";
import StateModel from "./States/StateModel";
import NewsInstance from "./News/NewsInstance";
import NewsModel from "./News//NewsModel";
import PoliticianInstance from "./Politicians/PoliticianInstance";
import Politicians from "./Politicians/PoliticianModel";
import Search from "./Search";


const Main = () => {
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/news/:id" component={NewsInstance} />
            <Route path="/news" component={NewsModel} />
            <Route path="/politicians/:id" component={PoliticianInstance} />
            <Route path="/politicians" component={Politicians} />
            <Route path="/states/:id" component={StateInstance} />
            <Route path="/states" component={StateModel} />
            <Route path="/visualizations" component={Visualizations} />
            <Route path="/search/:query" component={Search} />
            <Route exact path="/" component={Splash} />
        </Switch>
    );
};

export default Main;
