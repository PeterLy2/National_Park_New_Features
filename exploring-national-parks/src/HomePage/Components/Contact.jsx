import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xxfnikc', 'template_zvdzxbf', form.current, 'ta_-LoktthbdkbUuH')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your message has been sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send your message. Please try again later.');
        }
      );
  };

  return (
    <div style={{
      borderBottom: '1px solid #171717',
      paddingBottom: '5rem'
    }}>
      <h1 style={{ 
        margin: '2.5rem 0',
        textAlign: 'center',
        fontSize: '2.25rem',
        color: 'white'
      }}>
        Contact Me
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '50%'
        }}>          
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div>
              <input 
                type="text" 
                name="user_name"
                style={{
                  width: '100%',
                  border: '1px solid #a3a3a3',
                  padding: '0.5rem',
                  borderRadius: '0.25rem',
                  color: 'black'
                }}
                placeholder="Your Name" 
                required
              />
            </div>
            <div>
              <input 
                type="email" 
                name="user_email"
                style={{
                  width: '100%',
                  border: '1px solid #a3a3a3',
                  padding: '0.5rem',
                  borderRadius: '0.25rem',
                  color: 'black'
                }}
                placeholder="Your Email Address" 
                required
              />
            </div>
            <div>
              <textarea 
                name="message"
                style={{
                  width: '100%',
                  border: '1px solid #a3a3a3',
                  padding: '0.5rem',
                  borderRadius: '0.25rem',
                  color: 'black',
                  minHeight: '125px'
                }}
                placeholder="Message" 
                required
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <button 
                type="submit" 
                style={{
                  backgroundColor: '#171717',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.25rem',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#404040'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#171717'}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;