const ExpertsSection = () => {
    const ExpertCard = ({ name, title, description, image }) => {
        return (
            <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden border border-[#FCA95D]">
                <img src={image} alt={name} className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#FCA95D]">{name}</h3>
                    <p className="text-lg text-gray-700 italic">{title}</p>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>
            </div>
        );
    }
    
    const experts = [
        {
            name: "John Doe",
            title: "Master Barber",
            description: "With over 10 years of experience, John specializes in modern cuts and classic styles.",
            image: "https://via.placeholder.com/300" // Replace with actual image URLs
        },
        {
            name: "Jane Smith",
            title: "Stylist",
            description: "Jane is known for her creative styles and attention to detail, ensuring every client leaves satisfied.",
            image: "https://via.placeholder.com/300" // Replace with actual image URLs
        },
        {
            name: "Mike Johnson",
            title: "Beard Specialist",
            description: "Mike has a passion for beard grooming and offers personalized services for every client.",
            image: "https://via.placeholder.com/300" // Replace with actual image URLs
        }
    ];

    return (
        <section className="bg-[#F9FAFB] w-screen overflow-hidden py-20">
            <div className="mx-auto px-6 max-w-screen-2xl flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCA95D] leading-tight text-center mb-4">
                    MEET OUR EXPERTS
                </h2>
                <p className="text-[#49403B] text-lg leading-relaxed max-w-xl text-center mb-10">
                    Each member of our team is committed to providing an exceptional grooming experience, ensuring you leave looking and feeling your best.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert, index) => (
                        <ExpertCard 
                            key={index}
                            name={expert.name}
                            title={expert.title}
                            description={expert.description}
                            image={expert.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExpertsSection;