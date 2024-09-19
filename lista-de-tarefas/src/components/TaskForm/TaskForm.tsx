import styles from "./TaskForm.module.css";

// Interfaces
import { ITask } from "../../interfaces/Task";

// Hooks
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
};

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      // Limpar os valores após adicionar a tarefa
      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "difficulty") {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <div className={styles.container}>
          <input
            required
            type="text"
            className={styles.input}
            name="title"
            id="title"
            onChange={handleChange}
            value={title} // valor controlado
          />
          <label className={styles.label} htmlFor="title">
            Nome da tarefa
          </label>
        </div>
      </div>
      <div className={styles.input_container}>
        <div className={styles.container}>
          <input
            required
            type="number"
            className={styles.input}
            name="difficulty"
            id="difficulty"
            onChange={handleChange}
            value={difficulty === 0 ? "" : difficulty} // Limpar o input após o envio
          />
          <label className={styles.label} htmlFor="difficulty">
            Dificuldade da tarefa
          </label>
        </div>
      </div>
      {/* <button type="submit">{btnText}</button> */}
      <button className={styles.btn}>
        <svg
          height="24"
          width="24"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          data-name="Layer 1"
          id="Layer_1"
          className={styles.sparkle}
        >
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
        </svg>

        <span className={styles.text}>{btnText}</span>
      </button>
    </form>
  );
};

export default TaskForm;
