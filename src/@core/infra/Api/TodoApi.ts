import Todo from "../../entities/Todo";

export const todoApi = {
  getAll: async ({ page, limit }: { page: number; limit: number }) => {
    const url = `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}&_sort=id&_order=desc`;

    const todoResponse = await fetch(url);
    const todoData = await todoResponse.json();

    return todoData as Todo[];
  },
  getById: async (id: number) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    const todoResponse = await fetch(url, { method: "GET" });

    const todoData = await todoResponse.json();

    return todoData as Todo;
  },
  create: async (todo: Todo) => {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    const body = JSON.stringify({
      ...todo,
      completed: false,
      userId: 1,
    });

    const todoResponse = await fetch(url, { method: "POST", body });

    const todoData = await todoResponse.json();

    return todoData as Todo[];
  },
  update: async (id: number, todo: Todo) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    const body = JSON.stringify({
      ...todo,
      completed: false,
      userId: 1,
    });

    const todoResponse = await fetch(url, { method: "PUT", body });

    const todoData = await todoResponse.json();

    return todoData as Todo[];
  },
  delete: async (id: number) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    const todoResponse = await fetch(url, { method: "DELETE" });

    const todoData = await todoResponse.json();

    return todoData;
  },
};
