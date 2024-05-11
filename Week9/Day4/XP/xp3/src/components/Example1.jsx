import data from './data.json'

const Example1 = (props) => {
    return (
        <div>
            <h2>Example 1</h2>
            {data.SocialMedias.map(item => (
                <h3 key={item}>{item}</h3>
            ))}
        </div>
    );
}

export default Example1