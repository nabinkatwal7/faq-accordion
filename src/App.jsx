import './App.css'
import Accordion from "./../components/Accordion";

function App() {
  return (
    <div className="App w-screen min-h-screen relative bg-[#f9f0ff]" >
      <div style={{
          backgroundImage: 'url(./../assets/images/background-pattern-desktop.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
      }} className={"w-full min-h-[400px]"} ></div>
        <div className={"absolute w-[60%] h-[60%] bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 p-4" +
            " -translate-y-1/2"} >
            <div className={"flex flex-col gap-4"} >
                <div className={"title flex gap-2"} >
                    <img src="./../assets/images/icon-star.svg" />
                    <p className={" text-3xl lg:text-8xl font-bold"} >FAQs</p>
                </div>
                <div className={"faq"} >
                    <Accordion />
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
