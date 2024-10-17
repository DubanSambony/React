import React, { useState } from 'react';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function UserProfile() {
    const [user, setUser] = useState({ name: 'John Doe', age: 25 });
    const [inputValue, setInputValue] = useState('');
    const [nameColor, setNameColor] = useState(getRandomColor());
    const [ageColor, setAgeColor] = useState(getRandomColor());

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        const parts = value.split(' ');
        const name = parts.slice(0, -1).join(' '); // Obtener el nombre
        const age = parts[parts.length - 1]; // El último elemento es la edad

        // Actualiza el estado automáticamente
        const ageNumber = age ? parseInt(age, 10) : user.age;

        setUser({ 
            name: name || user.name,
            age: ageNumber
        });
        
        // Cambia los colores al cambiar el input
        setNameColor(getRandomColor());
        setAgeColor(getRandomColor());
    };

    return (
        <div>
            <p style={{ color: nameColor }}>Name: {user.name}</p>
            <p style={{ color: ageColor }}>Age: {user.age}</p>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Enter 'Name Age'" 
            />
        </div>
    );
}

export default UserProfile;
