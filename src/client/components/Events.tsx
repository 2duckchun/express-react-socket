export function Events({ events }: { events: string[] }) {
  return (
    <div>
      <ul>
        {events.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
