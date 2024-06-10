import GridList from './GridList'

export default function SideCardList({edus}) {
  return (
    <div className="rounded-md border border-gray-300 bg-white">
      <ul role="list" className="divide-y divide-gray-30 overflow-auto h-96">
        {edus.map((item) => (
          <li key={item.id1} className="px-6 py-4">
            <GridList edus={edus}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
