import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Card from './Card.js'

 
    function App() {
      return (
        <div className="App">
          <Navbar />
          <Hero />
          <Card 
            img='Katie.png'
            icon= "Star 1.png"
            rating='5.0'
            review={(6)}
            country='USA'
            title='Life lessons with Katie Zaferes'
            price ='From $136'
          />
          </div>
      );
    }

export default App;
