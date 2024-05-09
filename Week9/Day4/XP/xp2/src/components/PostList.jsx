import data from './data.json'

const PostList = (props) => {
    console.log(data);
    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2> <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PostList