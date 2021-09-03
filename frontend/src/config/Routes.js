import { Switch, Route } from "react-router";
import CityContainer from '../pages/CityContainer.jsx'
import Homepage from '../pages/Homepage.jsx'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/cities' component={CityContainer} />
        </Switch>
    )

}

export default Routes