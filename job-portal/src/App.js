import './App.css';
import Header from './components/Header';

function App() {
  const profile = {
    picture: 'https://via.placeholder.com/50', // Replace with actual profile picture URL
    name: 'Akhilesh K'
  };

  return (
    <div className="App">
      <Header profile={profile} />
    </div>
  );
}

export default App;
