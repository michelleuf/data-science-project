const varient = [
  {
    name: 'alpha',
    tCount: 'xx',
    tpercentage: 'xx',
  },
  {
    name: 'beta',
    tCount: 'xx',
    tpercentage: 'xx',
  },
  {
    name: 'Theta',
    tCount: 'xx',
    tpercentage: 'xx',
  },
]

export default function MapDataContainer() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-xl text-indigo-600 font-semibold tracking-wide uppercase">
            Country name
          </p>
          <h2 className="mb-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Total Cases : xx</h2>
        </div>
      </div>
      <div>
      <p className="px-6 mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">By Varient</p>
      {varient.map((feature) => (
        <div class="grid grid-cols-3 gap-3">
          <div key={feature.name}>                   
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
          </div>
          <div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.tCount}</p>
          </div>
          <div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.tpercentage}%</p>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  )
}
