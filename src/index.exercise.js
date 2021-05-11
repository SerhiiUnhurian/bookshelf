import '@reach/dialog/styles.css'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'
import {Logo} from './components/logo'

function LoginForm({onSubmit, buttonText}) {
  const handleSubmit = e => {
    e.preventDefault()
    const {username, password} = e.target.elements
    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <input type="submit" value={buttonText} />
    </form>
  )
}

function App() {
  const [openDialog, setOpenDialog] = React.useState('none')

  const open = ({target}) => setOpenDialog(target.textContent)
  const close = () => setOpenDialog('none')
  const login = formData => console.log('login', formData)
  const register = formData => console.log('register', formData)

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={open}>Login</button>
      </div>
      <div>
        <button onClick={open}>Register</button>
      </div>

      <Dialog
        aria-label="Login form"
        isOpen={openDialog === 'Login'}
        onDismiss={close}
      >
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>

      <Dialog
        aria-label="Registration form"
        isOpen={openDialog === 'Register'}
        onDismiss={close}
      >
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
