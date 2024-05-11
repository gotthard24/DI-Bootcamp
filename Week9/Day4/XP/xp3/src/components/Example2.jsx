import data from './data.json'

const Example2 = (props) => {
    return (
        <div>
            <h2>Example 2</h2>
            {data.Skills.map(item => (
                <div key={item.Area}>
                    <h3>{item.Area}</h3>
                    {item.SkillSet.map(skill => (
                        <h4 key={skill.Name}>{skill.Name}</h4>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Example2;
