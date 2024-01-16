import { useState } from "react"

interface AccordionData {
    id: number,
    title: string,
    content: string
}

const data:AccordionData[] = [
    {
        id: 1,
        title: "What is a dog?",
        content: "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
    },
    {
        id: 2,
        title: "What does it mean to be a dog?",
        content: "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
    },
    {
        id: 3,
        title: "Are dogs good?",
        content: "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
    },
    {
        id: 4,
        title: "What are types of dogs?",
        content: "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."
    }
]

function Accordion() {
    const [active, setActive] = useState(0);
    return (
        <div className={"flex flex-col gap-4 w-full"} >
            {data.map((item, index) => (
                <div className={"flex flex-col gap-4"} key={index}>
                    <div className={"flex flex-row justify-between gap-2 items-center"} onClick={() => setActive(index)}>
                        <p className={"text-xl lg:text-2xl font-bold w-full"} >{item.title}</p>
                        <div>
                            {active === index ? <img src="./../assets/images/icon-minus.svg"/> : <img src="./../assets/images/icon-plus.svg"/>}
                        </div>
                    </div>
                    {active === index && <div><p className={"text-lg text-gray-700"}>{item.content}</p></div>}

                </div>
            ))}
        </div>
    );
}

export default Accordion;
