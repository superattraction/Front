import GridList from './GridList'

const items = [
  { id: 1 },
]

export default function SideCardList() {
  return (
    <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
      <ul role="list" className="divide-y divide-gray-300">
        {items.map((item) => (
          <li key={item.id1} className="px-6 py-4">
            <GridList />
          </li>
        ))}
      </ul>
    </div>
  )
}
