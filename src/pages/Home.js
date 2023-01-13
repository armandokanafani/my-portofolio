import { Player } from '@lottiefiles/react-lottie-player'

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
            <section>

            </section>
            {/* Languange Section End   */}
        </div>

    )
}

export default Home