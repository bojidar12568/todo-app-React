export default function TodoFilter ({onFilter, filter }) {
  return (
    <div>
      <p>
        <button onClick={() => onFilter('All')} className= {filter === 'All' ? 'filter-color' : undefined}>All</button>
        <button onClick={() => onFilter('Active')} className= {filter === 'Active' ? 'filter-color' : undefined}>Active</button>
        <button onClick={() => onFilter('Done')} className= {filter === 'Done' ? 'filter-color' : undefined}>Done</button>
      </p>
    </div>
  )
}