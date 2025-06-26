import Form from "../app/addTodoForm"
import Todos from "../todos"

export default function Home() {
  return (
    <div className="container">
      <Form />

      <section className="todosContainer"><Todos /></section>
    </div>
  );
}
