import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";

import useStore from "../store";

function TodoListItems() {
  const store = useStore();
  return (
    <>
      {store.todos.map((todo: any) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox checked={todo.done} onClick={() => store.toggle(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => store.update(todo.id, evt.target.value)}
          />
          <Button onClick={() => store.remove(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
