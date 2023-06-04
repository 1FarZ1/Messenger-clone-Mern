import '../css/App.css'
function App() {

  return (
    <> 
    
    <h2>Sign in to Get Started</h2>   
 
    <input type="email" style={
        {
          marginTop: '10px',
          width: '70%',
          height: '20px',
        }

      }/>
      <br />
      <input type="password"  style={
        {
          marginTop: '10px',
          marginBottom: '10px',
          width: '70%',
          height: '20px',
        }

      }/>
      <br />

      <button>
        submit
        </button>  

        <h2>dont have an account ?</h2>
        <button>
          sign up
        </button>

    </>
  )
}

export default App
