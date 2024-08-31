import logo from './logo.svg';
import './App.css';
import Fudeu from './components/profile/index'
import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from 'react'
function App() {

  const [cvc, setCvc] = useState('')
  const [past, setPast] = useState([])
  function handlePhone(object) {
    if (object.value.length > object.maxLength) {
      object.value = object.value.slice(0, object.maxLength)
      setCvc(object.value);
    }
  }

  function handleCard(object) {
    if (object.value > object.maxLength) {
      object.value = object.value.slice(0, object.maxLength)
    }

    const arrstring = Array.from(object.value)
    console.log(arrstring)
    if (arrstring.length == 4 || arrstring.length == 9 || arrstring.length == 14 ) {
      if (past[past.length - 1] == '.') {
        console.log('penis humido')
        return
      } else {
        arrstring.push('.')
        let current = arrstring.join('')
        object.value = current
      }
    }
    setPast(Array.from(object.value))
  }

  return (
    <div className="App container-md">
      <div className='row'>
        <div className='col d-flex justify-content-center align-items-center'>
          <h1>Passe os dados sensíveis</h1>
        </div>
        <div className='col d-flex justify-content-center align-items-center'>
          <Fudeu/>
        </div>
      </div>
      <div className='w-50 m-auto'>
        <form action="">
              <label className='form-label' htmlFor="anal">Nome do titular</label>
              <input className='form-control mb-3' id='anal' type="text" />
          <div className='row'>
            <div className='col-6'>
              <label className='form-label' htmlFor="anal">Número do cartão</label>
              <input className='form-control mb-3' id='anal' type="text" maxLength={19} onKeyDown={(event) => {handleCard(event.target)}} />
            </div>
            <div className='col-3'>
              <label className='form-label' htmlFor="anal">CVC</label>
              <input className='form-control mb-3 anal' id='anal' type="number" maxLength={3} onKeyUp={(event) => {handlePhone(event.target)}} />
            </div>
            <div className='col-3'>
              <label className='form-label' htmlFor="anal">Vencimento</label>
              <input className='form-control mb-3' id='anal' type="number" />
            </div>
          </div>
          <button className='btn btn-success' type='submit'>Comprar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
