import Header from './components/Header'
import Userform from './components/Userform';
import Tasks from './components/Tasks'

const clicked = (e)=> {
  e.preventDefault();
  console.log('Clicked')
} 

function App() {
  return (
    <div className="App">
      <Header title='React-Ninja' />
      <Userform btnText = 'Submit' onclick={clicked}/>
      <Tasks />
    </div>
  );
}

export default App;
