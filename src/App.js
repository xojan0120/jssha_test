import React from 'react';
import jsSHA from 'jssha';

function App() {
  let shaObj = new jsSHA("SHA-512", "TEXT");
  shaObj.update("a");
  let hash = shaObj.getHash("HEX");
  return (
    <div className="App">
      {hash}
    </div>
  );
}

export default App;
