import { useState } from 'react'

function App() {
  const[persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567", id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
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

  let contactsToShow = null;

    if(filter === ""){
      contactsToShow = persons
    } else {
      contactsToShow = persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
      console.log(contactsToShow);
    }

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input type="text" onChange={handleFilterChange} value={filter} />
      </div>
      <h2>Add a new contact</h2>
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
          {contactsToShow.map(p =>(
            <li key={p.id} style={{listStyle: 'none'}}><span style={{fontWeight: 'bold'}}>{p.name}</span> {p.number}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
