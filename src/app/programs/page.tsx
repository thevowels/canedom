import { FaChalkboardTeacher, FaLaptop, FaHandshake, FaUsersCog } from "react-icons/fa"; // Importing icons

export default function Programs() {
    return (
        <div className="container mx-auto p-4 max-w-5xl">
            <h1 className="text-3xl font-bold mb-6">Our Programs</h1>
            <p className="mb-6">
                Our program will be implemented in the following sectors: essential skills for the blind; computer (information and technology); basic employment skills; soft skills, and building confidence. We primarily focus on practical learning and experiential learning.
            </p>

            {/* Program 1: Essential Skills for the Blind */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Essential Skills for the Blind</h2>
                <div className="flex">
                    <div className="flex-none w-36 h-36 mr-4">
                        <FaChalkboardTeacher className="text-orange-500 h-full w-full object-cover" /> {/* Set to 150px */}
                    </div>
                    <div className="flex-grow">
                        <p>
                            This program focuses on enhancing the crucial skills of orientation and mobility, as well as daily living skills, for individuals with visual impairment. In the realm of orientation and mobility skill development, participants will engage in practical training, including techniques for holding and using a white cane, gaining orientation to their surroundings, navigating by finding paths and landmarks, and harnessing other senses for improved mobility.
                            Furthermore, the program emphasizes the ability to navigate alongside sighted individuals, providing practical experience in real-world scenarios.
                        </p>
                        <p className="mt-2">
                            For daily living skills, the program addresses key aspects such as dressing smartly, maintaining eye contact, and performing daily chores like cooking and cleaning. Additionally, participants will learn the importance of effective communication through facial expressions and gestures.
                        </p>
                        <p className="mt-2">
                            Within the orientation and mobility training, a distinctive feature involves the implementation of individualized field trip programs, enriching the learning experience through practical applications in various environments. This approach aims to empower participants with both the skills and confidence needed to navigate their surroundings and engage in daily activities independently.
                        </p>
                    </div>
                </div>
            </section>

            {/* Program 2: Computer, Information and Technology */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Computer, Information and Technology</h2>
                <div className="flex">
                    <div className="flex-none w-36 h-36 mr-4">
                        <FaLaptop className="text-orange-500 h-full w-full object-cover" /> {/* Set to 150px */}
                    </div>
                    <div className="flex-grow">
                        <p>
                            The aim of this program is to empower individuals with visual impairments to acquire essential computer and IT skills. Participants will learn to use speech synthesizers and free software, master shortcut keys and keyboard functions, navigate Microsoft Office applications (Word, Excel, PowerPoint, and email clients), explore the internet and employ various search engines, as well as leverage AI for research.
                            Additionally, the program provides guidance on utilizing social media for both personal and professional purposes. These skills are instrumental for participants in enhancing their learning experience and accessing job opportunities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Program 3: Essential Employable Skills */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Essential Employable Skills</h2>
                <div className="flex">
                    <div className="flex-none w-36 h-36 mr-4">
                        <FaHandshake className="text-orange-500 h-full w-full object-cover" /> {/* Set to 150px */}
                    </div>
                    <div className="flex-grow">
                        <p>
                            This program encompasses essential employment skills. It covers effective communication, public speaking, basic business skills such as marketing, understanding and finding markets, calculating profit and loss, branding, financing with components like budgeting, bookkeeping, and banking knowledge, including understanding and managing personal e-payment bank accounts.
                            Additionally, it addresses official letter writing, content creation, questioning and answering skills, and planning and time management. These practical skills are designed to enhance individuals’ readiness for the workplace, promoting self-reliance. This program proves particularly beneficial for visually impaired individuals, aiding them in discovering job opportunities or initiating self-employment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Program 4: Soft Skills and Exposure Learning */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Soft Skills and Exposure Learning</h2>
                <div className="flex">
                    <div className="flex-none w-36 h-36 mr-4">
                        <FaUsersCog className="text-orange-500 h-full w-full object-cover" /> {/* Set to 150px */}
                    </div>
                    <div className="flex-grow">
                        <p>
                            Introducing our concluding program, the Soft-Skill and Exposure Learning Program. It focuses on key soft skills, including leadership, personal branding, critical thinking, brainstorming, teamwork, and emotional intelligence.
                            The Exposure Learning aspect involves meetings with visually impaired individuals successfully working in their professional fields and visiting other NGOs, institutes, or companies. The program’s goal is to enhance personality, soft skills, and confidence among participants.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impact of the Program Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Impact of the Program</h2>
                <p>
                    Empowering visually impaired individuals with comprehensive skills through programs like orientation and mobility, computer proficiency, employment skills, and soft-skill development has a profound impact. It not only enhances their ability to navigate the world independently but also opens doors to diverse employment opportunities.
                    Equipping them with essential computer skills broadens their access to information and technology, while employment-focused training fosters self-reliance and encourages meaningful contributions to the workforce.
                    The development of soft skills and exposure learning not only boosts confidence but also facilitates integration into professional environments, breaking down barriers for a more inclusive society.
                </p>
            </section>
        </div>
    );
}
