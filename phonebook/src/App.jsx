import { useState, useEffect } from 'react'

import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import Filter from './components/Filter'

import personService from './service/persons'

function App() {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setContactsToShow(initialPersons)
      })
  },[])

  const [contactsToShow, setContactsToShow] = useState([])

  const handleFilter = (filter) => {
    if (filter === "") {
      setContactsToShow(persons)
    } else {
      setContactsToShow(persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())))
    }
  }


  // insert contact
  const addPerson = (newPerson) => {
    newPerson.id = persons.length + 1
    const exists = (newPerson) => persons.findIndex(p => p.name === newPerson.name)

    if (exists(newPerson) !== -1) {
      return alert(`${newPerson.name} is already added to phonebook`)
    }

    personService
    .create( newPerson)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setContactsToShow(persons.concat(returnedPerson))
    })
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
