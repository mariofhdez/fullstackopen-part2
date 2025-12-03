import { useState } from 'react'

function App() {
  const[persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567"}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if(exists(newPerson) !== -1){
      return alert(`${newPerson.name} is already added to phonebook`)
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
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
          number: <input onChange={handleNumberChange} value={newNumber} type="text" />
        </div>
        <div>
          <button type='submit' onClick={addPerson} >Add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <div>
        <ul style={{padding: 0}}>
          {persons.map(p =>(
            <li key={p.name} style={{listStyle: 'none'}}><span style={{fontWeight: 'bold'}}>{p.name}</span> {p.number}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
