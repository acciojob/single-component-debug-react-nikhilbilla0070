import { render } from 'enzyme';
import React from 'react'

// const App = () => {
//   return (
//     <div>
//         <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
//     </div>
//   )
// }
function App() {
    return (
      <div>
        <p id='main'>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
      </div>
    );
  }
  

export default App;


