import { SiLibreofficemath } from "react-icons/si";

function About() {
  return (
    <div className="text-white h-full w-full flex justify-center items-center">
      <div className="w-[95%] h-full">
        <div>
          <h1 className="text-3xl font-bold my-2">About me</h1>
          <h2 className="inline-block w-12 border-2 border-[#ce9824] rounded-md"></h2>
        </div>

        <p className="my-4 text-gray-300 text-md text-justify">
        My name is Abhinav Chauhan, and I am a skilled MERN stack developer with 1.5 years of hands-on experience. In my career, I have honed my abilities in building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js.

To further enhance my professional growth and contribute to my company's success, I plan to create a comprehensive library of reusable UI components. This initiative will allow me to develop websites within a few days and integrate essential functionalities, such as authentication and CRUD APIs, within hours. By leveraging this component library, I aim to significantly boost development efficiency, reduce project turnaround times, and support the rapid scaling of company projects.
<p className="my-4 text-gray-300 text-md text-justify">
My goal is to bring innovative solutions and streamline the development process, ultimately driving both my personal growth and the growth of the company.
</p>
        </p>

        <div className="my-2">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="my-4 flex flex-wrap gap-2 "> 
                <div className="md:max-w-[250px] md:min-w-[250px] w-full h-auto border-[1px] border-[#605e5e] space-x-1 flex rounded-lg px-4 py-2">
                {/* <div className="h-full px-4 flex justify-center items-center"><SiLibreofficemath  className="text-[#ead487] text-4xl"/></div> */}
                <div>
                    <h1 className="text-xl font-medium mt-2 text-[#ead487]">Frontend</h1>
                    <h2 className="inline-block w-12  relative bottom-2 border-2 border-[#ce9824] rounded-md"></h2>
                    <div className="flex flex-col">
                    <p> JavaScript </p>
                    <p>TypeScript </p>
                    <p>React.js , Redux </p>
                    <p>Next.js </p>
                    <p>Tailwindcss</p>
                   
                    </div>
                </div>
                </div>

                <div className=" md:max-w-[250px] md:min-w-[250px] w-full h-auto border-[1px] border-[#605e5e] space-x-1 flex rounded-lg px-4 py-2">
                {/* <div className="h-full px-4 flex justify-center items-center"><SiLibreofficemath  className="text-[#ead487] text-4xl"/></div> */}
                <div>
                    <h1 className="text-xl font-medium mt-2 text-[#ead487]">Backend</h1>
                    <h2 className="inline-block relative bottom-2 w-12 border-2 border-[#ce9824] rounded-md"></h2>
                    
                    <div className="flex flex-col">
                    <p>Node.js </p>
                    <p>Express.js </p>
                    <p>MongoDB</p>
                    <p>AWS , Zod</p>
                    </div>
                </div>
                </div>
                

                <div className=" md:max-w-[250px] md:min-w-[250px] w-full h-auto border-[1px] border-[#605e5e] space-x-1 flex rounded-lg px-4 py-2">
              
                <div>
                    <h1 className="text-xl font-medium mt-2 text-[#ead487]">Sports</h1>
                    <h2 className="inline-block w-12  relative bottom-2 border-2 border-[#ce9824] rounded-md"></h2>
                    <div className="flex flex-col">
                    <p> Cricket ,district player</p>
                    <p>Volleyball , state player </p>
                    <p>Chess, district Player </p>
                  
                   
                    </div>
                </div>
                </div>
            </div>
            
           
        </div>
      </div>
    </div>
  );
}

export default About;
