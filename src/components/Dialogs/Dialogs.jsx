import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Dicaprio'},
        {id: 3, name: 'Roman'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Sergey'},
        {id: 7, name: 'Machno'},
    ];

    let messages = [
        {id: 1, message: 'Hello react'},
        {id: 2, message: 'How do you do '},
        {id: 3, message: 'Skidka koscherno'},
        {id: 4, message: 'Rezinochki optom'},
        {id: 5, message: 'Dorogo'},
        {id: 6, message: 'Secretno'},
        {id: 7, message: 'Batko'},
    ];

    let dialogsElements =  dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map( m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;