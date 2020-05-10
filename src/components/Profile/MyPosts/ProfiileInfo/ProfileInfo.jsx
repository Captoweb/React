import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return ( 
       <div>
           <div>
                <img class='profile' src='https://w-dog.ru/wallpapers/14/6/324153998540799/bezmyatezhnost-gorizont-sineva.jpg' />
                 {/*<img src='../../../public/img/sineva.jpg'   />*/}
           </div>
            <div className={s.descriptionBlock}>
              ava + desc
            </div>

        </div>
    )
}

export default ProfileInfo;