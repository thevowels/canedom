import {
    FaEye,
    FaBullhorn,
    FaHandHoldingHeart,
    FaChartBar,
    FaUsers,
    FaLightbulb,
    FaClipboardCheck
} from 'react-icons/fa'; // Import icons


export default function Page() {
    return (
        <div className="container mx-auto p-4 max-w-3xl"> {/* Set max-width for readability */}
            <h1 className="text-3xl font-bold mb-4">About Us</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Organization's Background</h2>
                <p>
                    According to the 2019 Inter-census survey, Myanmar has a population of 54.5 million. 2.7 million
                    people have visual impairment. Eighty-five (85%) of people with visual impairment in Myanmar are
                    unemployed and thus dependent on their families due to lack of mobility and professional skills,
                    which limits their access to wider employment opportunities. More than seventy-five (75%) of those
                    who are employed are working in the massage sector. After the COVID-19 pandemic, the country’s
                    economic situation gradually started deteriorating and affected the massage sector.
                </p>
                <p>
                    The founder of the organization founded Canedom after getting the opportunity to work in an
                    organization working with the blind. His work experience helped him realize that there are many
                    blind youth who have potential but do not see any other future opportunity other than going into the
                    field of massage because of a lack of professional and daily living skill training. It was with this
                    in mind he got the idea to explore other professional fields for the blind and to train them
                    accordingly.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Goal</h2>
                <p>
                    At Canedom, our goal is to equip the visually impaired to be independent in mobility and help them
                    explore new career opportunities. Our project will equip them to learn computer skills and basic
                    employment skills like communication, financing, business skills, soft skills, etc. Canedom was
                    founded in 2023. The organization’s name, ‘Canedom,’ combines ‘cane,’ which represents the white
                    cane, and ‘dom,’ which signifies freedom.
                </p>
            </section>

            {/* Vision and Mission Section */}
            <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    className="flex flex-col items-center text-center space-y-4 p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <FaEye className="text-orange-500 h-20 w-20 md:h-24 md:w-24"/> {/* Elegant size */}
                    <div>
                        <h2 className="text-2xl font-semibold">Vision</h2>
                        <p className="mt-2 text-gray-700">
                            Canedom Academy envisions a future where every visually impaired individual in Myanmar is
                            empowered to lead independent lives, pursuing their professional aspirations with confidence
                            and self-sufficiency.
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center text-center space-y-4 p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <FaBullhorn className="text-orange-500 h-20 w-20 md:h-24 md:w-24"/> {/* Elegant size */}
                    <div>
                        <h2 className="text-2xl font-semibold">Mission</h2>
                        <p className="mt-2 text-gray-700">
                            To empower visually impaired individuals through comprehensive yet basic employment skills,
                            providing access to various professions.
                        </p>
                    </div>
                </div>
            </section>


            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Our Philosophy</h2>
                <p>
                    We believe in the power of independent living as the key to unlocking opportunities and equality for
                    people with disabilities.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Values</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li className="flex items-center space-x-2">
                        <FaHandHoldingHeart className="text-orange-500 h-6 w-6"/>
                        <span><strong>Independent:</strong> Being able to create self-reliant lives with self-confidence.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUsers className="text-orange-500 h-6 w-6"/>
                        <span><strong>Integrated:</strong> Encouraging and facilitating active participation in society to create a more inclusive and harmonious community.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaClipboardCheck className="text-orange-500 h-6 w-6"/>
                        <span><strong>Daring:</strong> Fearlessly embracing challenges, breaking free from societal constraints.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaLightbulb className="text-orange-500 h-6 w-6"/>
                        <span><strong>Innovative:</strong> Offering fresh ideas, maintaining uniqueness in solutions.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaChartBar className="text-orange-500 h-6 w-6"/>
                        <span><strong>Accountable:</strong> Taking responsibility for our actions and mutual respect among team members.</span>
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2">Our Project</h2>
                <p>
                    In our residential training program for the visually impaired, we prioritize practical learning
                    alongside classroom sessions. Our focus encompasses critical aspects such as orientation and
                    mobility, daily living skills, computer proficiency, fundamental employment skills, soft skills, and
                    programs dedicated to building confidence and self-esteem.
                </p>
            </section>
        </div>


    );
}
