
import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import './App.css';




function App() {
const [remetente, setRemetende] = useState('');
const [destinatario, setDestinatario] = useState('');
const [destinatarioEmail, setDestinatarioEmail] = useState('');
const [mensagem, setMensagem] = useState('');


const SendEmail = (e)=>{
  e.preventDefault();
  
  var templateParams ={
    remetente : remetente,
    destinatario : destinatario ,
    destinatarioEmail : destinatarioEmail,
    mensagem : mensagem
  }

  emailjs.send('gmailMessage', 'send_email', templateParams, '9vy0O3xIQs_1vCgWJ')
  .then(function(response){
          console.log('sucesso', response.status, response.text)
        }, function(error){
          console.log('falha', error)
        })

   console.log(templateParams)     
}


  return (
   <>
      <header>
        <h1>Envio de email</h1>
      </header>
      <main>
        <fieldset>
          <legend><h2>Envie um email</h2></legend>
          <form onSubmit={SendEmail}>
            <input type="text" name='remetente' placeholder='nome do remetente' 
              onChange={ (e) => {setRemetende(e.target.value)}}
             value={remetente}
            />
            <br/>
            <input type="text" name='destinatario' placeholder='nome do destinatario' 
             onChange={ (e) => {setDestinatario(e.target.value)}}
             value={destinatario}
            />
            <br/>
            <input type="email" name='destinatarioEmail' placeholder='email do destinatario' 
             onChange={ (e) => {setDestinatarioEmail(e.target.value)}}
              value={destinatarioEmail}
            />
            <br/>
            <input type="text" name='mensagem' placeholder='mensagem' 
              onChange={ (e) => {setMensagem(e.target.value)}}
              value={mensagem}
            />
            <input type="submit" value="enviar mensagem"/>


          </form>
        </fieldset>
      </main>
  
   </>
  );
}

export default App;
