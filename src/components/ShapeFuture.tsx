import shapeImage from "../assets/images/shape.png";

const ShapeFuture = () => {
  return (
    <section className="bg-[#C0B799] text-gray-900 min-h-[80vh] md:min-h-[120vh] flex flex-col pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 flex-1 flex flex-col">
        <div className="mb-16 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Shape Your Future
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col h-full justify-between">
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg mb-6">
              Hameedah Private School in Ikorodu is the ultimate premier choice
              for parents seeking excellent academic standards combined with
              deep Islamic values. We passionately offer a modern, world-class
              education that shapes young minds into confident, successful
              global leaders. Our state-of-the-art secure campus features modern
              facilities that provide a safe, vibrant, and highly inspiring
              learning space for your exceptional nursery, primary, and high
              school students
              <span className="text-lg text-gray-700 leading-relaxed max-w-lg">
                We proudly deliver a unique, fully integrated curriculum
                blending rigorous Western sciences and technology with rich
                Islamic moral guidance. Guided by highly qualified educators,
                our brilliant children excel remarkably in core academics,
                dynamic digital skills, creative arts, and exciting physical
                sports like Taekwondo. Every single child discovers their unique
                voice through active student clubs, colorful cultural
                celebrations, and premium weekly debate tournaments.
              </span>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              We firmly believe in making elite international education highly
              affordable for all families, offering flexible term fees and
              special sibling discounts. Choose an institution that confidently
              guarantees both brilliant academic success and strong spiritual
              growth for your beloved child. Enroll your future champion at
              Hameedah Private School today and watch them soar to ultimate
              greatness!
            </p>
          </div>
          <div className="flex items-start justify-center md:flex md:items-start md:justify-start md:h-full">
            <img
              src={shapeImage}
              alt="Shape illustration"
              className="w-full h-64 md:h-full md:max-h-none object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeFuture;
