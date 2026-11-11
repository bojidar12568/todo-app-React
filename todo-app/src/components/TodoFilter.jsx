export default function TodoFilter ({onFilter, }) {
  return (
    <div>
      <p>
        <button onClick={() => onFilter('All')}>All</button>
        <button onClick={() => onFilter('Active')}>Active</button>
        <button onClick={() => onFilter('Done')}>Done</button>
      </p>
    </div>
  )
}