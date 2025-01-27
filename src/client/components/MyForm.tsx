import { FormEvent, HTMLAttributes, useState } from "react";
import { socket } from "../socket/socket";

export function MyForm() {
  const [value, setValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    socket.timeout(2000).emit("chat", value, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button disabled={isLoading}>Submit</button>
    </form>
  );
}
