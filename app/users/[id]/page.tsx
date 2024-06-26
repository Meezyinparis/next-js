import { notFound } from "next/navigation";
import User from "../User";

interface Props {
  params: { id: number };
}

// I can also do this
// const UserDetailPage = async ({ params: { id } }: {params: {id: number}})
const UserDetailPage = async ({ params: { id } }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user: User = await res.json();
  if (!user.id) notFound();

  return (
    <h2>
      NAME: {user.name} ID: {user.id}
    </h2>
  );
};

export default UserDetailPage;
