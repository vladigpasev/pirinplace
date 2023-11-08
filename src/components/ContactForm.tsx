"use client"
import React, { useEffect, useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { sendEmail } from '@/app/actions'
import SubmitButton from './SubmitButton'

const initiakState = {
    message: null,
    success: false,
    error: false
}
//@ts-ignore
function ContactForm({ lng }) {
    const [state, formAction] = useFormState(sendEmail, initiakState);
    
    const formRef = useRef(null); 
    let title, name, email, message, send, subject;
    switch(lng) {
        case "en":
            title = "Send us a message";
            name = "Name";
            email = "Email";
            subject = "Subject";
            message = "Message";
            send = "Send";
            break;
        case "bg":
            title = "Изпратете ни съобщение";
            name = "Име";
            email = "Имейл";
            subject = "Тема";
            message = "Съобщение";
            send = "Изпрати";
            break;
    }
    console.log(state);
    useEffect(() => {
        // If the success state changes to true, reset the form and display a message
        if (state.success) {
            //@ts-ignore
            formRef.current.reset(); // This will clear the form
            // Here you could also implement additional logic to display a success message
        }
    }, [state.success]);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {state.success && <p className="success-message mb-5 text-success">Your message has been sent successfully!</p>}
            <p className="success-message mb-5 text-error">{state.error}</p>
            <form ref={formRef} action={formAction}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{name}</label>
                    <input required type="text" id="name" name="name" className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md h-8 p-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{email}</label>
                    <input required type="email" id="email" name="email" className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md h-8 p-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{subject}</label>
                    <input required type="text" id="subject" name="subject" className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md h-8 p-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{message}</label>
                    {/*@ts-ignore*/}
                    <textarea required id="message" name="message" rows="4" className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border border-gray-300 rounded-md p-2"></textarea>
                </div>

                <SubmitButton send={send} />
            </form>
        </div>
    )
}

export default ContactForm