import Post from './Post';


const DUMMY_DATA = [{
    id: '123',
    username: 'ssssuser',
    userImg: 'https://avatars.githubusercontent.com/u/25158805?s=400&u=a4f1db9061602b8aa7de77ea47f420b653cf1e11&v=4',
    img: 'https://avatars.githubusercontent.com/u/25158805?s=400&u=a4f1db9061602b8aa7de77ea47f420b653cf1e11&v=4',
    caption: 'SUBSCRIBE AND DESTROY'
}, {
    id: '123',
    username: 'ssssuser',
    userImg: 'https://avatars.githubusercontent.com/u/25158805?s=400&u=a4f1db9061602b8aa7de77ea47f420b653cf1e11&v=4',
    img: 'https://avatars.githubusercontent.com/u/25158805?s=400&u=a4f1db9061602b8aa7de77ea47f420b653cf1e11&v=4',
    caption: 'SUBSCRIBE AND DESTROY'
}]

function Posts() {
    return(
        <div>
            {DUMMY_DATA.map(post => (
                <Post 
                    key={post.id} 
                    id={post.id} 
                    userName={post.username} 
                    userImg={post.userImg} 
                    img={post.img} 
                    caption={post.caption} 
                />
            ))}
        </div>
    )
}

export default Posts;