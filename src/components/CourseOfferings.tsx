const courses = [
  {
    title: "Dual-Purpose Facilities",
    description:
      "Operates an accredited JAMB CBT centre on-site. Students do not need to travel elsewhere for major exam registrations.",
    icon: "🏢",
    image: "course1.png",
  },
  {
    title: "Qualified Teaching Staff",
    description:
      "Employs certified educators focused on academic success. and our Teachers provide close guidance for secondary school curriculums.",
    icon: "👩‍🏫",
    image: "course2.png",
  },
  {
    title: "Early Digital Literacy",
    description:
      "Features a dedicated, functional computer laboratory.Students gain practical IT skills from an early educational stage.",
    icon: "💻",
    image: "course3.png",
  },
  {
    title: " Direct Communication",
    description:
      "Provides multiple active phone channels and responsive social pages.Parents can easily reach the administration for updates.",
    icon: "📞",
    image: "course4.png",
  },
  {
    title: "Exam Readiness",
    description:
      "Holds a strong track record for WAEC, NECO, and UTME preparation.High schoolers benefit from intense mock testing and exam-room practice.",
    icon: "🧠",
    image: "course5.png",
  },
  {
    title: "Serene Learning Environment",
    description:
      "Tucked away from major Lagos highway noise in Eruwen, Ikorodu.The calm location helps students focus during school hours.",
    icon: "🌳",
    image: "course6.png",
  },
  {
    title: "Full Educational Cycle",
    description:
      "Accommodates children from early primary up to senior secondary blocks.Siblings of different ages can attend the same institution",
    icon: "🎒",
    image: "course7.png",
  },
  {
    title: " Budget-Friendly Schooling",
    description:
      "Maintains a competitive private school pricing structure.Quality education is accessible without extreme financial strain.",
    icon: "💰",
    image: "course8.png",
  },
  {
    title: "Core Moral Discipline",
    description:
      "Emphasizes character building alongside standard academics.Strict behavioral rules ensure a safe environment for all learners..",
    icon: "🛡️",
    image: "course9.png",
  },
];

const CourseOfferings = () => {
  return (
    <section
      id="academics"
      className="bg-[#C0B799] min-h-[80vh] md:min-h-[120vh] flex flex-col pt-40 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 flex-1 flex flex-col">
        <div className="text-center mb-8 md:mb-12">
            <p className="text-sm font-semibold tracking-widest text-[#C0B799] uppercase mb-3">
            COURSE OFFERINGS{" "}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {" "}
            Find Your Path
          </h2>
        </div>
        <div className="flex-1 flex items-center justify-center mb-16 md:mb-32">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            Discover degree programs and industry-aligned courses designed to
            propel your future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-56 md:h-64 border-b-2 border-[#C0B799] overflow-hidden bg-white flex items-center justify-center">
                <span className="text-5xl absolute">{course.icon}</span>
                <img
                  src={`/src/assets/images/${course.image}`}
                  alt={course.title}
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOfferings;
