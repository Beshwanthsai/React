import React, { useEffect, useState } from 'react';
export default function Users() {
const [users, setUsers] = useState([]);
useEffect(() => {
fetch('/api/users')
.then(res => res.json())
.then(data => setUsers(data));
}, []);
return (
<>
<h2> User List</h2>
<ul>
{users.map(user => (
<li key={user.id}>{user.name} - {user.email}</li>
))}
</ul>
</>
);
}