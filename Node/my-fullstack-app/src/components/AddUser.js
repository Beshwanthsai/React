import React, { useState } from 'react';
export default function AddUser() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        setFormData({ name: '', email: '' });
        alert("User added!");
    };
    return (
        <>
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange}
                    value={formData.name} />
                <input name="email" placeholder="Email" onChange={handleChange}
                    value={formData.email} />
                <button type="submit">Add</button>
            </form>
        </>
    );
}