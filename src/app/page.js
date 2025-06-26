import React, { Suspense } from "react";
import Form from "../app/addTodoForm"
import Todos from "../todos"

export default function Home() {
  return (
    <div className="container">
      <Form />

      <Suspense fallback={<div>loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
}
