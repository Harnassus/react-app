import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Card from './Card.js'
import Data from './data.js';


function App() {
  const cards = Data.map(data => {
    return (
      <Card
        key={data.id}
        data={data}
        icon='Star 1.png'
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
