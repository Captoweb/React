import React from 'react';
import s from './Music.module.css';
import {NavLink} from "react-router-dom";

const Music = (props) => {
    return (
        <div>
            Music
            <div>
                 <img className={s.music} src="https://cdn2.iconfinder.com/data/icons/flaticons-stroke/16/music-1-128.png" alt=""/>
            </div>
        </div>
    )
}

export default Music;