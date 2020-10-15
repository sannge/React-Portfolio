import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../container/pages/Home/Home'
import Experience from '../container/pages/Experience/Experience'
import Projects from '../container/pages/Projects/Projects'
import Contact from '../container/pages/Contact/Contact'
function Routing() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/experience' component={Experience}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </main>
    )
}

export default Routing
