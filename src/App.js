import Todo from './Todo'
import ButtonStyled from './Button'

function App() {
  return (
    <div className="App">
      <Todo title="coffee" />
      <Todo title="milk" isDone/>
      <ButtonStyled color="yellow">Hello</ButtonStyled>
      <ButtonStyled>Bye</ButtonStyled>
    </div>
  );
}

export default App;
