import React, { useState } from "react";
import "./Top-menu.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const AdminBar = () => {

    const clientlist = [
        {
            name: "Acumen Collection (83953)",
            id: "83953",
        },
        {
            name: "Alaabi (77974)",
            id: "77974",
        },
        {
            name: "Apatchy (57345)",
            id: "57345",
        },
        {
            name: "Dr Watson CBD (53283)",
            id: "53283",
        },
    ];

    const [value, setValue] = useState('Acumen Collection (83953)');

    const handleSelect = (e) => {
        console.log(e);
        setValue(e)
    }

    return (
        <div className="container-fluid">
            <div className="admin-bar">
                <DropdownButton
                    title={value}
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                >
                    {clientlist.map(clientlist => (
                        <Dropdown.Item eventKey={clientlist.name}>{clientlist.name}</Dropdown.Item>
                    ))}

                </DropdownButton>
                <ul>
                    <li>
                        <button style={{ color: 'red' }}>System</button>
                    </li>
                    <li>
                        <button>Manage Clients</button>
                    </li>
                    <li>
                        <button>Custom CSS</button>
                    </li>
                    <li>
                        <button>Posts</button>
                    </li>
                    <li>
                        <button>Events</button>
                    </li>
                    <li>
                        <button>Media</button>
                    </li>

                    <li>
                        <button>Logs</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdminBar;




