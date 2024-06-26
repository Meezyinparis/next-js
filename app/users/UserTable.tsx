import Link from "next/link";
import User from "./User";
import { sort } from "fast-sort";

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc((u) =>
    sortOrder === "name" ? u.name : sortOrder === "email" ? u.email : u.id
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
