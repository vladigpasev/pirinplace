import React from 'react'
import { useFormStatus } from 'react-dom';

function SubmitButton( {send}: any ) {
    const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" aria-disabled={pending} disabled={pending}>{send}</button>
  )
}

export default SubmitButton