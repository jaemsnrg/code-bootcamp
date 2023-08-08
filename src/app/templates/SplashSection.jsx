import { gridConfig } from '@/app/utils/styling'
import Header from '@/app/components/molecules/Header'
import Button from '@/app/components/atoms/Button'

const SplashSection = () => {
    return ( 
    <section className={`h-screen w-full bg-gradient-to-t from-brand-1 px-6 lg:px-8`}>
        <div className={`${gridConfig} w-full h-full`}>
          <div className='h-8 lg:h-auto col-span-full'>
            <Header />
          </div>
          <div className={`col-span-full lg:col-span-7 mt-24 lg:mt-20`} >
            <h1 className={`font-sans text-brand-2 splash`} >
              Start your journey
            </h1>
            <h2 className={`font-mono h1 text-[white] mb-4 mt-4 lg:mt-16 max-w-[28rem]`}>
              explore endless opportunities in tech
            </h2>
            <Button text="Start" className="absolute lg:static bottom-[3vh] right-[3vh] mt-8" />
          </div>

          <div className='col-span-full lg:col-span-5'>
            <img 
              className='w-full object-cover rounded-3xl shadow-inner max-h-[28rem] lg:max-h-[45rem] shadow-inherit'
              src='/images/splash.jpg'
              alt="A man coding (pixelart)"
            />
          </div>
        </div>
      </section>
     );
}
 
export default SplashSection;