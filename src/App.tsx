import './App.css';
import Header from "./components/Header"
import TransactionList from "./components/TransactionList"

function App() {
  return (
    <div className="App">
      <Header title='Titlo'>
        <a href="/">Listagem</a>
        <a href="/create">Cadastro</a>
      </Header>
      <TransactionList />
    </div>
  );
}

export default App;
