//compo general de clase, maneja las vistas, que nos permite apagar y prender vistas

class App extends React.Component {
    constructor() {
        super()

        this.state = { view:'login', token: null }
    }

    render() { //el render devuelve lo que hay que pintar, el return decide que pintar:

          //ternario: pero podemos usar IF como abajo:
        // return this.state.view === 'login'?
        // <login/>
        // :
        // null

        if (this.state.view === 'login')
        return <Login
        onRegisterClick={() => this.setState({view: 'register'})}  //se genera una props, que es onRegisterClick , envío un callback que cambiara el view state
        onLoggedIn={token => this.setState({ view: 'home', token})}  //si se ha hecho bien el authenticate, irá a la home
        />
        else if (this.state.view === 'register')
        return <Register onLoginClick={() => this.setState({ view: 'login'})} />
        else if (this.state.view === 'home')
        return <Home/>
    }
}