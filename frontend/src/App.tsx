import React, {useEffect, useState} from 'react';
import api from './services/api'

// Components
import User from './components/User'
import MainContainer from './components/MainContainer'

interface IUser {
  name: string;
  email: string;
}

function App() {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(()=> {
    api.get<IUser[]>('/users').then(response=> {
      setUsers(response.data)
    })
  },[])

  return (
    <div className="App">
      <MainContainer>
      {users.length > 0 ? users.map((user, index)=> (
        <User key={index} user={user}/>
      )) : <p>No data! (make sure the backend is running)</p>}
      </MainContainer>
    </div>
  );
}

export default App;