import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";


export default function PricingPage() {
	return (
		<div>
<<<<<<< Updated upstream:app/pricing/page.tsx
			<h1 className={title()}>Pricing</h1>
=======
			<div className="">
				<div className="flex flex-auto flex-wrap  justify-center">
					<div className=" m-auto mt-14">
						<h1 className="text-2xl">LOOKING FOR EXCITING <span className="text-teal-500 font-bold text-5xl"><br />CAREER</span></h1>
					</div>
					<div className="">
						<Image width={700} src="https://www.hiteshi.com/_next/static/media/career_banner.dac07c8f.png" alt="image" />
					</div>
				</div>
				<div className="m-auto bg-gray-300 mt-12 ">
					<div className="w-3/4 m-auto p-11">

						<h1 className={title()}>WHY JOIN US</h1>
						<p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro iste, qui deleniti repellat provident sapiente quia quam placeat vero aperiam impedit consequatur commodi. Perferendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, molestiae doloremque tempore corporis optio ducimus!</p>
					</div>
                </div>

			</div>
			
			<div className="my-5 ">
               
				<h1 className={title()}>CURRENT OPENING</h1>
				<div className="flex justify-center my-9 gap-5 flex-wrap">
                <div className="bg-gray-300 px-5 py-9 w-2/6 border-solid border-2 hover:scale-95 transition-all border-r-slate-400 shadow-lg">
					<h1 className="m-2">Full Stack Developer</h1>
					<p className="m-2">Exp : 3-6 Years</p>
					<Button variant="solid" color="primary" className="m-2 hover:bg-sky-500 ">Apply Now</Button>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Learn More</Button>
				</div>
                <div className="bg-gray-300 px-5 py-9 w-2/6 border-solid border-2 hover:scale-95 transition-all border-r-slate-400 shadow-lg">
					<h1 className="m-2">Full Stack Developer</h1>
					<p className="m-2">Exp : 3-6 Years</p>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Apply Now</Button>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Learn More</Button>
				</div>
                <div className="bg-gray-300 px-5 py-9 w-2/6 border-solid border-2 hover:scale-95 transition-all border-r-slate-400 shadow-lg">
					<h1 className="m-2">Full Stack Developer</h1>
					<p className="m-2">Exp : 3-6 Years</p>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Apply Now</Button>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Learn More</Button>
				</div>
                <div className="bg-gray-300 px-5 py-9 w-2/6 border-solid border-2 hover:scale-95 transition-all  border-r-slate-400 shadow-lg">
					<h1 className="m-2">Full Stack Developer</h1>
					<p className="m-2">Exp : 3-6 Years</p>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Apply Now</Button>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Learn More</Button>
				</div>
                <div className="bg-gray-300 px-5 py-9 w-2/6 border-solid border-2 hover:scale-95 transition-all  border-r-slate-400 shadow-lg">
					<h1 className="m-2">Full Stack Developer</h1>
					<p className="m-2">Exp : 3-6 Years</p>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Apply Now</Button>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Learn More</Button>
				</div>
                <div className="bg-gray-300 px-5 py-9 w-2/6 border-solid border-2 hover:scale-95 transition-all border-r-slate-400 shadow-lg">
					<h1 className="m-2">Full Stack Developer</h1>
					<p className="m-2">Exp : 3-6 Years</p>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Apply Now</Button>
					<Button variant="solid" color="primary" className="m-2  hover:bg-sky-500 ">Learn More</Button>
				</div>
                  

				</div>
				  <Button variant="solid" color="primary" className=" hover:bg-sky-500 ">FIND MORE</Button>
			</div>
>>>>>>> Stashed changes:app/career/page.tsx
		</div>
	);
}
