import { useEffect, useState } from "react";
import { socket } from "../socket/socket";
import { ConnectState } from "../components/ConnectionState";
import { ConnectionManager } from "../components/ConnectionManager";
import { Events } from "../components/Events";
import { MyForm } from "../components/MyForm";

export function AllChatPage() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvent, setFooEvent] = useState<any[]>([]);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onFooEvent = (value: any) => {
      setFooEvent((previous) => [...previous, value]);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", () => {});
      socket.off("disconnect", () => {});
      socket.off("foo", () => {});
    };
  }, []);

  return (
    <div>
      <h1>All Chat</h1>
      <section>
        <ConnectState isConnected={isConnected} />
        <ConnectionManager />
        <Events events={fooEvent} />
        <MyForm />
      </section>
    </div>
  );
}
