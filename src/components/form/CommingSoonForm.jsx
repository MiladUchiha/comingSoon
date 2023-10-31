'use client'
import { useState } from 'react'
import { toast } from 'sonner';
import React from 'react'
import axios from 'axios'

export default function CommingSoonForm() {
    const [email, setEmail] = useState("");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emailRegex.test(email)) {
          // Invalid email format, show an error message or prevent form submission
          toast.warning('Det här är inte en giltig e-postadress.');
          return false; // Prevent form submission
      }
      axios.post('/api/addEmail', {email}).then((res)=>{
      toast.success('Vi kommer att meddela dig när vi är redo.')
      setEmail('')
      }

        
      )}
  return (
    <form onSubmit={handleSubmit}>
            <input
            value={email} onChange={(e) => setEmail(  e.target.value )} autoComplete='email'  type="email" placeholder="ihidago@ujufidnan.gov" />
            <button>Meddela mig</button>
          </form>
  )
}
