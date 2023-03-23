import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import './form-styles.css'


const Form = () =>{
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
      
    

    return(
        <>
            <h2 className='send-mail_legend'>Envie um email</h2>
            <section id="send-mail">
                <form className='send-mail_form' onSubmit={SendEmail}>
                    <label className='send-mail_label'> remetente </label>
                    <input className='send-mail_input' type="text" name='remetente' placeholder='nome do remetente' 
                        onChange={ (e) => {setRemetende(e.target.value)}}
                        value={remetente}
                    />
                     

                    <label  className='send-mail_label'> destinatario </label>
                    <input className='send-mail_input' type="text" name='destinatario' placeholder='nome do destinatario' 
                        onChange={ (e) => {setDestinatario(e.target.value)}}
                        value={destinatario}
                    />
                     
                    <input className='send-mail_input' type="email" name='destinatarioEmail' placeholder='email do destinatario' 
                        onChange={ (e) => {setDestinatarioEmail(e.target.value)}}
                        value={destinatarioEmail}
                    />
                     
                    <input className='send-mail_input' type="text" name='mensagem' placeholder='mensagem' 
                        onChange={ (e) => {setMensagem(e.target.value)}}
                        value={mensagem}
                    />
                    <input className='send-mail_send' type="submit" value="enviar mensagem"/>
                </form>
                    
            </section>
        </>
    )
}

export default Form