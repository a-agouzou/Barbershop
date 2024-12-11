

const Services = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 h-screen">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-100 p-4 rounded-md">
                    <h2 className="text-xl font-bold">Haircut</h2>
                    <p className="mt-2">We offer a variety of
                        haircut styles to choose from.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                    <h2 className="text-xl font-bold">Beard Trim</h2>
                    <p className="mt-2">We offer a variety of
                        beard trimming services.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                    <h2 className="text-xl font-bold">Shave</h2>
                    <p className="mt-2">We offer a variety of
                        shaving services.</p>
                </div>
            </div>
        </section>
    );
    }
export default Services;