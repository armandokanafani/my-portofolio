import { Player } from '@lottiefiles/react-lottie-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faPhp, faJava, faBootstrap, faLaravel, faReact} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return(
        <div>
             {/* Hero Section Start */}
            <section className="flex flex-wrap  h-screen lg:items-center px-12 md:px-24 lg:px-36">
                <div className="flex flex-col self-center w-full py-6 lg:w-1/2">
                    <h1 className="font-bold text-2xl text-center lg:text-4xl lg:text-start">Hi, Welcome to My World</h1>
                    <h2 className="font-bold text-xl text-center lg:text-2xl lg:text-start text-opacity-50">I'm Armando Kanafani</h2>
                    <p className="font-base text-justify lg:text-lg mt-4">I am someone who is dedicated to being a frontend. I have high enthusiasm in learning new things in programming. I have a high level of curiosity about programming. I am always trying to learn something new and when I can understand it, I will study it until I can master it in depth.</p>
                </div>
                <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
                    <Player className='md:w-2/3' autoplay loop src="https://assets2.lottiefiles.com/packages/lf20_es4p9zph.json"></Player>
                </div>
            </section>
            {/* Hero Section End */}

            {/* Languange Setion Start */}
            <section className='flex flex-col px-12 md:px-24 lg:px-36'>
                <h1 className='font-bold text-2xl text-center lg:text-4xl '>Programming</h1>

                {/* Icon Programming Area*/}
                <div className='flex flex-wrap lg:px-36 justify-center border drop-shadow-lg gap-4 w-full my-6 mb-12 self-center py-6 px-6 rounded-lg'>
                    
                    {/* Html icon*/}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-orange-600' icon={faHtml5} />
                        <span className='text-sm font-medium px-2'>HTML</span>
                    </div>

                    {/* CSS icon*/}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-blue-700' icon={faCss3Alt} />
                        <span className='text-sm font-medium px-2'>CSS</span>
                    </div>

                    {/* Javascript icon */}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-yellow-400' icon={faJs} />
                        <span className='text-sm font-medium px-2'>Javascript</span>
                    </div>

                    {/* PHP icon */}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-blue-400' icon={faPhp} />
                        <span className='text-sm font-medium px-2'>PHP</span>
                    </div>

                    {/* Java icon */}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-blue-500' icon={faJava} />
                        <span className='text-sm font-medium px-2'>Java</span>
                    </div>

                    {/* Bootstrap icon */}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-purple-600' icon={faBootstrap} />
                        <span className='text-sm font-medium px-2'>Bootstrap</span>
                    </div>

                    {/* Laravel icon */}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-red-700' icon={faLaravel} />
                        <span className='text-sm font-medium px-2'>Laravel</span>
                    </div>

                    {/* Tailwind icon */}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-blue-500' icon={faCss3Alt} />
                        <span className='text-sm font-medium px-2'>Tailwinds</span>
                    </div>

                    {/* React icon */}
                    <div className='bg-gray-300 rounded-lg px-2 py-px'>
                        <FontAwesomeIcon className='text-blue-300' icon={faReact} />
                        <span className='text-sm font-medium px-2'>React Js</span>
                    </div>
                </div>

            </section>
            {/* Languange Section End   */}

            {/* Experiance Section Start */}
            <section className='flex flex-col mt-12 px-12 md:px-24 lg:px-36'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-2xl text-center lg:text-start'>Experiance</h1>
                    <div className='ml-6 bg-gray-300 w-full h-[1px]'></div>
                </div>
                
                {/* Experiance container */}
                <ul className='list-disc'>
                    {/* poin 1 */}
                    <li className='my-6'>
                        <div className='flex flex-col lg:flex-row lg:justify-between'>
                            <span className='text-sm text-gray-400'>March 2021 - Present</span>
                            <div className='mt-2'>
                                <h3 className='font-bold'>Keluarga Besar Mahasiswa Pendidikan Teknologi Informasi</h3>
                                <p className='text-sm'>IT Staff of Departement PUSKOMINFO | Departement student association</p>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </section>
            {/* Experiance Section End */}

            {/* Project Section Start */}
            <section className='flex flex-col mt-12 px-12 md:px-24 lg:px-36'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-2xl text-center lg:text-start'>Project</h1>
                    <div className='ml-6 bg-gray-300 w-full h-[1px]'></div>
                </div>

                {/* Project Container */}
                <div className='flex flex-wrap my-2 gap-2 justify-center lg:justify-start'>
                    
                    {/* Card 1 */}
                    <div className='rounded-lg border-2 drop-shadow-lg my-4 md:w-2/3 lg:w-1/3'>
                        <div className='flex justify-center'>
                            <img className='rounded-t-lg drop-shadow-none' src={require('../assets/img/Project-1.png')} alt="Project-KBMPTI-web" />
                        </div>
                        <div className='my-4 mx-2'>
                            <h2 className='font-bold text-'>Rebuild KBMPTI Website</h2>
                            <p className='text-sm text-justify'>Rebuild official website for recruitmen using Tailwind, Laravel</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* Project Section End */}
        </div>

    )
}

export default Home