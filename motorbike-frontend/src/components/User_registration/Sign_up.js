import React from 'react'
import './Registration.css'

export const Sign_up = () => {
    return (
        <div>
            <h1 className='login'>Sign Up</h1>
            <form>
                <div className='form-input'>
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className='form-input'>
                    <label>email</label>
                    <input type="text" />
                </div>
                <div className='form-action'>
                    <button type='submit' className='submit-action'>Sign in</button>
                </div>
            </form>
        </div>
    )
}
