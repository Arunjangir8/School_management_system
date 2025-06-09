const announcements = [
  {
    id: 1,
    time: '2025-06-08',
    title: 'New Feature Released',
    description: 'We’ve rolled out a new dashboard view to help you track your performance more effectively.',
  },
  {
    id: 2,
    time: '2025-06-05',
    title: 'Scheduled Maintenance',
    description: 'Our platform will undergo maintenance on June 12 from 12:00 AM to 2:00 AM UTC. Services may be temporarily unavailable.',
  },
  {
    id: 3,
    time: '2025-06-01',
    title: 'Welcome New Users!',
    description: 'We’re excited to welcome over 1,000 new users to our platform this month. Thank you for joining!',
  },
];

const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-xs text-gray-400">View all</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                {announcements.map((ann)=>(
                <div className="odd:bg-LamaSkyLight even:bg-LamaPurpleLight p-4 rounded-md" key={ann.id}>
                    <div className="flex justify-between items-center">
                        <h2 className="font-medium">{ann.title}</h2>
                        <span className="text-xs rounded-md bg-white text-gray-400 px-1 py-1">{ann.time}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{ann.description }</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Announcements
