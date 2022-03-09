

const Joke = (props) => {

      if (props.punchline === undefined) {
          return <h3>{props.setup}</h3>
        
      } else {
          return(
        <div className="container"  >
            <h3>Setup: {props.setup}</h3>
                  <h4> Punchline: {props.punchline}</h4>
                  
                  <hr></hr>
        </div>
      )
    }
    
}

export default Joke;