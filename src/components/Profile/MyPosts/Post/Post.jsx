import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
               <img src="https://pbs.twimg.com/media/C8GMunyW4AAUN2L.jpg" />
               { props.message }

                <div> 
                   <span>like</span> { props.likesCount }
                </div>
            </div>
    )
                        
 
} 

export default Post;