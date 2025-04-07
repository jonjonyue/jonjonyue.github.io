interface Interest {
  title: string;
  description: string;
}

interface InterestsProps {
  interests: Interest[];
}

const Interests = ({ interests }: InterestsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {interests.map((interest, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">{interest.title}</h3>
          <p className="text-gray-600">{interest.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Interests; 