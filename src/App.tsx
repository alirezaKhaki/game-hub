import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  return <h1>Hello world</h1>;
}

export default App;
