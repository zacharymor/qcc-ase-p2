import Grid from "../components/Grid";
import "../App.css"


function Home() {

    return (
      <div>
        <div class="jumbotron jumbotron-fluid mb-5 border border-success">
          <h1 class="display-4">Hello, Alien!</h1>
          <p class="lead">
          Welcome to our intergalactic fashion haven! Explore our stellar collection of 
          shirts featuring our extraterrestrial friends. 
          </p>
          <hr class="my-4"></hr>
          <p>
          Embrace your inner cosmic style and join us on a journey through the cosmos. 
          Happy shopping, fellow alien aficionado!
          </p>
          <p class="lead">
            <a class="btn btn-dark btn-lg border-success" href="#grid-scroll" role="button">
              Buy Now
            </a>
          </p>
        </div>
        <h1 id="grid-scroll">Yee! Haw! Space Cow!</h1>
        <Grid />
      </div>
    );
  }

  export default Home;