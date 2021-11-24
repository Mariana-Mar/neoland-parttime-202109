function authenticateUser(username, password, callback) {

    if (typeof username !== 'string') throw new TypeError(username + ' is not string')
    if (!username.trim()) throw new Error('username is empty or blank')

    if (typeof password !== 'string') throw new TypeError(password + ' is not string')
    if (!password.trim()) throw new Error('password is empty or blank')
    if (password.trim().length < 6) throw new Error('password length is smaller than 8 characters')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    
    
    var xhr = new XMLHttpRequest //llamada a un servidor para enviar datos //conector

    xhr.open ('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth'); //con qué metodo abro?


    //xhr.addEventListener('load', function() { es lo mismo que onload.
        xhr.onload = function() {
        

        if (this.status === 400 || this.status === 401) {              //siempre coviene contemplar los casos de error
            var res = JSON.parse(this.responseText) 
            var error = res.error
            callback(new Error(error))  

        } else if (this.status === 200) {
            res = JSON.parse(this.responseText)
            var token = res.token
            callback(null, token)
        }
    }

    xhr.setRequestHeader('Content-type', 'application/json')
    
    var data = {}
    
    data.username = username
    data.password = password

    var json = JSON.stringify(data)

    xhr.send(json) //cuando hay respuesta se carga el load, por eso estamos configurando el load antes, arriba..
}