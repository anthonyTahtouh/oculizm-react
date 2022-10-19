import React, {useEffect, useState } from "react";
import "./Top-menu.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const AdminBar = () => {

    const [clients, setClients] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch("https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_all_clients")
            .then(res => res.json())
            .then(
                (result) => {
                    setClients(result);
                    setValue(result[0].name + "(" + result[0].id + ")");
                }
            )
    }, [])

    const handleSelect = (e) => {
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
                    {clients.map(clientlist => (
                        <Dropdown.Item key={clientlist.id} eventKey={clientlist.name + "(" + clientlist.id + ")" }>{clientlist.name} ({clientlist.id})</Dropdown.Item>
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




