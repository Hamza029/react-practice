import './App.css'
import Card from './components/Card';

function App() {
  // const myObj = {
  //   username: 'hamza',
  //   age: 24,
  // }

  // const myArr = [1, 2, 3];

  const usernames = ['Hamza', 'Rahim', 'Karim'];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 mb-4 rounded-xl">Tailwind test</h1>
      {
        usernames.map((username, index) => (<Card key={index} username={username} />))
      }
      {/* <Card username='Hamza' userInfo={myObj} arr={myArr} />
      <Card username={'rahim'}/>
      <Card username={'karim'}/> */}
    </>
  )
}

export default App
