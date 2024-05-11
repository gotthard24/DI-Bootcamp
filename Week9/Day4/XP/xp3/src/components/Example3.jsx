import data from './data.json';

const Example3 = (props) => {
    return (
        <div>
            <h2>Example 3</h2>
            {data.Experiences.map((item, i) => (
                <div key={i}>
                    <img src={item.logo} alt="" />
                    <h3><a href={item.url}>{item.companyName}</a></h3>
                    {item.roles.map(role => (
                        <div key={role.title}> 
                            <h3><strong>{role.title}</strong></h3>
                            <h3>{role.startDate}{" "}{role.location}</h3>
                            <h3>{role.description}</h3>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Example3;
