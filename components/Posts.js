import { useEffect, useState } from 'react';
import Post from './Post';
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore';
import { db } from '../firebase';


function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => 
     onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
     }), [db]);

    return(
        <div>
            {posts.map(post => (
                <Post 
                    key={post.id} 
                    id={post.id} 
                    userName={post.data().username} 
                    userImg={post.data().profileImg} 
                    img={post.data().image} 
                    caption={post.data().caption} 
                />
            ))}
        </div>
    )
}

export default Posts;