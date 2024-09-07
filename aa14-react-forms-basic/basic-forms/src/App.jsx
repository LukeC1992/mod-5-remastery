import { useState } from 'react'
import './App.css'



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [role, setRole] = useState('');
  const [bio, setBio] = useState('');
  const [notifications, setNotifications] = useState(false);
  const [errors, setErrors] = useState({});
  const handleClick = () => setNotifications(!notifications)

  function handleSubmit(e) {
    e.preventDefault();

    const errors = {}

    if (!name) {
      errors.name = 'Name is required, can not be empty.'
    }

    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if (!emailRegex.test(email)) {
      errors.email = 'Email is required, can not be empty, and should be properly formatted.'
    }

    const phoneRegex = new RegExp(/^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/)
    if (phone && !phoneRegex.test(phone)) {
      errors.phone = 'Phone number is optional, if presented, it should be properly formatted.'
    }

    if (phone && !phoneType) {
      errors.phoneType = 'Phone type must be selected if a phone number is presented.'
    }

    if (bio.length > 280) {
      errors.bio = 'Bio should have a character limit of 280 characters.'
    }

    if (Object.values(errors).length) {
      setErrors(errors)
    } else {
      setName('');
      setEmail('');
      setPhone('');
      setPhoneType('');
      setRole('')
      setBio('');
      setNotifications(false);
      return console.log(name, email, phone, phoneType, role, bio, notifications);
    }

  }


  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label>Name:</label>
        <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <span>{errors.name ? errors.name : ''}</span>

        <label>Email:</label>
        <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email ? errors.email : ''}

        <label>Phone Number:</label>
        <input id='phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
        {errors.phone ? errors.phone : ''}

        <label>Phone Type:</label>
        <select id='phoneType' name='phoneType' value={phoneType} onChange={(e) => setPhoneType(e.target.value)}>
          <option>Mobile</option>
          <option>Home</option>
          <option>Work</option>
        </select>
        {errors.phoneType ? errors.phoneType : ''}

        <label>Staff:</label>
        <label>Instructor</label>
        <input name='role' type='radio' value={'Instructor'} onClick={(e) => setRole(e.target.value)} />
        <label>Student</label>
        <input name='role' type='radio' value={'Student'} onClick={(e) => setRole(e.target.value)} />

        <label>Bio:</label>
        <textarea rows={5} cols={50} value={bio} onChange={(e) => setBio(e.target.value)} />
        {errors.bio ? errors.bio : ''}

        <label>Email Notifications?</label>
        <input type='checkbox' checked={notifications} onChange={handleClick} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
