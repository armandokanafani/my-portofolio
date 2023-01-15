
const Portofolio = () => {
    return(
        <section className='flex flex-col px-12 md:px-24 lg:px-36'>
            <h1 className='font-bold text-2xl text-center'>Portofolio</h1>

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
    )

}

export default Portofolio