import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(item => {
        return (
          <li key={item.id}>
            <FriendListItem friend={item} />
          </li>
        );
      })}
    </ul>
  );
}
