import { useState } from 'react'

function App() {
  const[persons, setPersons] = useState([
    { name: 'Arturo Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} type="text" />
        </div>
        <div>
          <button type='submit' onClick={addPerson} >Add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <div>
        <ul style={{padding: 0}}>
          {persons.map(p =>(
            <li key={p.name} style={{listStyle: 'none'}}>{p.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
