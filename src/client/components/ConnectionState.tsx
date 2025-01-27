export function ConnectState({ isConnected }: { isConnected: boolean }) {
  return (
    <div>
      <p>State : {String(isConnected)}</p>
    </div>
  );
}
