import React from "react";
import { List } from "./UserListUI.styled";
import type { TUser } from "../../../types";
//TODO: сделать UserCard на основе UI после этого сюда вставить

interface UserListUIProps {
    users: TUser[];
    variant?: "list" | "profile";
    onClick?: (id: string) => void;
}

// const UserListUI: React.FC<UserListUIProps> = ({
//   users,
//   variant = "list",
//   onClick,
// }) => {
//   return (
//     <List>
//       {users.map((user) => (
//         <UserCard
//           key={user.id}
//           {...user}
//           variant={variant}
//           onClick={onClick}
//         />
//       ))}
//     </List>
//   );
// };

// export default UserListUI;
