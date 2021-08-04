import './App.css';
import Main from './components/main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducers from './Redux/reducers/index'


const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;
