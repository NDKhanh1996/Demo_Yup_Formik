import { useState } from 'react';
import './App.css';
import { ContactForm } from './components/contactForm/contactForm';
import { Library } from './components/Library/library';
import { MailForm } from './components/mailForm/mailForm';

function App() {
  const [form, setForm] = useState(false);
  const [library, setLibrary] = useState(false);
  const [mailForm, setMailForm] = useState(false);

  const handleHide = (formName) => {
    switch (formName) {
      case 'form':
        setForm(!form);
        break;
      case 'library':
        setLibrary(!library);
        break;
      case 'mailForm':
        setMailForm(!mailForm);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="App">
        {form && <ContactForm />}
        <button onClick={() => handleHide('form')}>form</button>
        {library && <Library />}
        <button onClick={() => handleHide('library')}>library</button>
        {mailForm && <MailForm />}
        <button onClick={() => handleHide('mailForm')}>mailForm</button>
      </div>
      
    </>
  );
}

export default App;
 