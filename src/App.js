import * as React from 'react';


function App() {

    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/start">
                            <Start />
                        </Route>
                        <Route path="/what">
                            <What />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/fundation">
                            <Fundation />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
export default App;
