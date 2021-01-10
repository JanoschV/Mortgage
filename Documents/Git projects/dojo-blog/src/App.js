import './App.css';

function App() {
const title = 'This is the new blog';
const likes = 45;
// const person = {
//   name: "Link",
//   age: 19,
// };
const link = "http://www.google.com"
  return (
    <div id = "root">
    <div className="App">
     <div className = "content">
      <h1> {title}</h1>
      <p >Liked {likes} times</p> 
      <p>{10}</p>
      <p>{"Hey party people"}</p>
      <p>{[1,3,5,7,9]}</p>
      <a href = {link}>Google page</a>
      </div>
    </div>
    </div>
  );
}

export default App;
