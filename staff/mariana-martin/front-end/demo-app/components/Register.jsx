class Register extends React.Component {
    constructor() {
        super()

        this.state = {feedback: null}
    }

    render() {
        return <div>
            <form>
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password" />
                <button>Register</button>
            </form>


            <a href="" onClick={event => {
                event.preventDefault()  //evento que no permite que se actualice la página, y lo podamos controlar con javascript
                this.props.onLoginClick()
            }}>Login</a>
        </div>
    }
}