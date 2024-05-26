interface UserCardProps {
  name?: string;
  age?: number;
}

const UserCard = ({ name = "Default", age = 0 }: UserCardProps) => {
  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;
