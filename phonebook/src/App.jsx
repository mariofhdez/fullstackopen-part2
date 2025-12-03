import { useState } from 'react'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567", id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [contactsToShow, setContactsToShow] = useState(persons)

  const handleFilter = (filter) => {
    if (filter === "") {
      setContactsToShow(persons)
    } else {
      setContactsToShow(persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())))
      console.log(contactsToShow);
    }
  }


  // insert contact
  const addPerson = (newPerson) => {
    newPerson.id = persons.length + 1
    const exists = (newPerson) => persons.findIndex(p => p.name === newPerson.name)

    if (exists(newPerson) !== -1) {
      return alert(`${newPerson.name} is already added to phonebook`)
    }

    setPersons(persons.concat(newPerson))
  }


  return (
    <>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add a new contact</h2>
      <ContactForm onAdd={addPerson} persons={persons} />
      <h2>Contacts</h2>
      <Contacts persons={contactsToShow} />
    </>
  )
}

export default App
