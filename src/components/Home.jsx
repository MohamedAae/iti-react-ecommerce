import {useState} from 'react';

const Home = () => {
  const [change, setChange] = useState(true);
  return (
    <div>
      <button onClick={() => setChange(!change)}>
        Click Here!
      </button>
      {change ? <h1>Welcome to GeeksforGeeks</h1> :
        <h1>A Computer Science Portal for Geeks</h1>}
    </div>
  );
}

export default Home;
