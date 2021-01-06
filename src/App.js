//import logo from './logo.svg';
import './App.css';
import ContentHeader from "./containers/header/ContentHeader";
import ContentGeneral from './containers/content/ContentGeneral'

function App() {
    const logoUrl = './src/logo.svg';

    const exampleUser = {
        profileUrl: '/user/1',
        name : 'Ivan',
        surname : 'Ivanov'
    };
//
  return (
    <div className="App">
      <header className="App-header">
          <ContentHeader image={logoUrl} profileUrl={exampleUser.profileUrl} name={exampleUser.name} surname={exampleUser.surname} logoUrl={logoUrl} />
          <div>Oljko talks</div>
      </header>
        <body>
        <ContentGeneral/>

        </body>
    </div>
  );
}

export default App;

