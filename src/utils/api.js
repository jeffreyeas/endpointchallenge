const baseUrl = import.meta.env.BASE_URL;
const headers = new Headers();
headers.append("X-Api-Key", import.meta.env.API_KEY);

async function fetchData(type, url, data) {
  const response = await fetch(url, {
    method: type,
    headers: headers,
    body: JSON.stringify(data),
  });
  return response.json();
}

async function getTodos() {
  const url = baseUrl + "/get";
  return fetchData("GET", url);
}

async function updateTodo(id, data) {
  const url = baseUrl + `/patch/${id}`;
  return fetchData("PATCH", url, data);
}

export const Api = {
  getTodos: getTodos,
  updateTodo: updateTodo,
};
