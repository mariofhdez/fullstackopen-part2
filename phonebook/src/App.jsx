import { useState } from 'react'

function App() {
  const[persons, setPersons] = useState([
    { name: 'Arturo Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName
    }

    if(exists(newPerson) !== -1){
      return alert(`${newPerson.name} is already added to phonebook`)
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const exists = (newPerson) => persons.findIndex(p => p.name === newPerson.name)

  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} type="text" />
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
