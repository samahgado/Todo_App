import "./List.css";
import { useTodoStore } from "../../store/TodoStore";

const List = ({ list }: any) => {
  const activeListId = useTodoStore((state) => state.activListId);
  const selectedList = useTodoStore((state) => state.selectedListId);

  return (
    <li
      className={`list ${list.id === activeListId && "active-list"}`}
      onClick={() => selectedList(list.id)}
    >
      💼 {list.name}
    </li>
  );
};

export default List;
