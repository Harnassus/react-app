import Navbar from './Navbar.js'
import Card from './Card.js'
import Data from './data.js';


function App() {
  const items = Data.map(data => {
    return(
    <Card 
      key={data.id}
      {...data}
      />
    )
 })

  return (
  
    <div className="App">
      <Navbar />
      <section className='card-list'>
        {items}
      </section>
    </div>
  );
}

export default App;
