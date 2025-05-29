// How to use bootstrap in React js
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col bg-dark text-white p-5">Column 1</div>
          <div className="col">Column 2</div>
          <div className="col">Column 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
