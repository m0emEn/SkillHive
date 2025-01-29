import CourseCard from "./ui/Card";
import Container from "./ui/Container";
const CardsSection = ({ title, data }) => {
  return (
    <Container>
      <div className="flex justify-between mt-20">
        <h1 className="text-lg font-semibold ">{title}</h1>
        <h2 className="text-md font-semibold text-blue-500 cursor-pointer hover:text-blue-700">
          See All
        </h2>
      </div>
      <div
        className={
          "grid grid-cols-1 gap-15 lg:grid-cols-4 md:grid-cols-3 custom-cols-2 custom-cols-1 mt-5"
        }
      >
        {data.courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            cateogry={course.category}
            lessons={course.lessons}
            image={course.image}
            author={course.author}
            rating={course.rating}
            duration={course.duration}
          />
        ))}
      </div>
    </Container>
  );
};

export default CardsSection;
