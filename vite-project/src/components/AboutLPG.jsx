const AboutLPG = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 text-center">
        <header className="md:w-3/4 mx-auto mb-32">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            {" "}
            DevTrajectory
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
            Generate structured roadmap tailored to your learning goals.
          </h2>
          <p className="mb-8">
            Create personalized learning paths based on your goals, interests,
            and skill levels. Get tailored recommendations for courses,
            resources, and activities that align with your learning objectives.
          </p>
          <div className="w-80 py-4 mx-auto rounded-2xl border-2 border-amber-600 shadow-lg shadow-amber-600/50 hover:shadow-amber-600/80 hover:bg-amber-100 transition duration-300 ease-in-out">
            <button>Get Started</button>
          </div>
        </header>
        <div className="pt-18">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
            How it works
          </h2>
          {/* CARDS: 
              - Colored circles will be replaced with icons.
           */}
          <div className="flex flex-wrap justify-center gap-4 md:text-lg lg:text-xl">
            <div className="w-80 flex flex-col items-center justify-center p-4 text-center shadow-2xl rounded-lg">
              <div className="flex items-center gap-2 pb-2">
                <div className="font-bold ">1.</div>
                <h3 className="font-semibold">Define Your Goals</h3>
              </div>
              <p>
                Tell the app what skill or career milestone you want to master.
              </p>
            </div>
            <div className="w-80 flex flex-col items-center justify-center p-4 text-center shadow-2xl rounded-lg">
              <div className="flex items-center gap-2 pb-2">
                <div className="font-bold ">2.</div>
                <h3 className="font-semibold">Assess Your Starting Point</h3>
              </div>
              <p>
                Input your current skill level and knowledge base to skip
                concepts you already know
              </p>
            </div>
            <div className="w-80 flex flex-col items-center justify-center p-4 text-center shadow-2xl rounded-lg">
              <div className="flex items-center gap-2 pb-2">
                <div className="font-bold ">3.</div>
                <h3 className="font-semibold">Set Your Schedule</h3>
              </div>
              <p>
                Specify how many hours a day or week you can commit to studying.
              </p>
            </div>
            <div className="w-80 flex flex-col items-center justify-center p-4 text-center shadow-2xl rounded-lg">
              <div className="flex items-center gap-2 pb-2">
                <div className="font-bold ">4.</div>
                <h3 className="font-semibold">Generate Your Path</h3>
              </div>
              <p>
                The AI maps out a custom curriculum divided into bite-sized,
                chronological milestones.Key
              </p>
            </div>
          </div>
          <div className="pt-18">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
              Features
            </h2>
            {/* CARDS: 
              - Colored circles will be replaced with icons.
           */}
            <div className="flex flex-wrap justify-center gap-4 md:text-lg lg:text-xl">
              <div className="w-80 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-5 h-5 rounded-full bg-amber-200"></div>
                <h3></h3>
                <p>
                  Personalized learning paths learning tailored to individual
                  needs
                </p>
              </div>
              <div className="w-80 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-5 h-5 rounded-full bg-amber-300"></div>
                <p>Progress tracking and goal setting</p>
              </div>
              <div className="w-80 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-5 h-5 rounded-full bg-amber-400"></div>
                <p>Enhanced motivation through clear learning objectives</p>
              </div>
              <div className="w-80 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-5 h-5 rounded-full bg-amber-500"></div>
                <p>Time-saving by focusing on relevant content</p>
              </div>
              <div className="w-80 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-5 h-5 rounded-full bg-amber-600"></div>
                <p>Integration with various learning platforms</p>
              </div>
              <div className="w-80 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-5 h-5 rounded-full bg-amber-700"></div>
                <p>Improved knowledge retention and skill development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLPG;
