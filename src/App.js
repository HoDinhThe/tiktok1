import Content  from './Content';
import { useState } from 'react'

function App(){
    const [show, setShow] = useState(false)

    return(
      <div style={{ padding: 30 }}>
        <button onClick={() => setShow(!show)}>Toggle</button>
          {show && <Content/>}
      </div>
    )
}

export default App;
