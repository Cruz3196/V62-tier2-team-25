const AboutLPG = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl md:text-4xl mb-8">About DevTrajectory</h2>
        <p className="mb-8">
          The Learning Path Generator is an innovative tool designed to
          help learners create personalized learning paths based on their goals,
          interests, and skill levels. By analyzing user input and leveraging
          advanced algorithms, LPG provides tailored recommendations for
          courses, resources, and activities that align with the learner's
          objectives. Whether you're a student looking to enhance your knowledge
          or a professional seeking to upskill, LPG offers a structured approach
          to achieving your learning goals efficiently.
        </p>
        <div className="mt-22">
          {/* CARDS: 
              - Colored circles will be replaced with icons.
           */}
          <div className="flex flex-wrap justify-center gap-4 md:text-lg lg:text-xl">
            <div className="w-80 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-5 h-5 rounded-full bg-amber-200"></div>
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
    </>
  );
};

export default AboutLPG;
