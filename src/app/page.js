import Form from "../app/addTodoForm"

export default function Home() {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer"></section>
    </div>
  );
}
