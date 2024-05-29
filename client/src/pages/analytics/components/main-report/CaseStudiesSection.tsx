import { FC } from "react";
import { TestimonialType } from "../utils/types";
type Props = {
  testimonials: TestimonialType;
};

const CaseStudiesSection: FC<Props> = ({ testimonials }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Project: {testimonials.projectName}
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Location:</strong> {testimonials.location}
          </li>
          <li>
            <strong>Start Date:</strong> {testimonials.startDate}
          </li>
          <li>
            <strong>Duration:</strong> {testimonials.duration}
          </li>
        </ul>
        <p className="mb-4">
          <strong>Description:</strong> {testimonials.description}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Notable Achievements:</h3>
        <p>{testimonials.notableAchievements}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Challenges:</h3>
        <p>{testimonials.challenges}</p>
      </div>
      <div className="">
        <h3 className="my-5 text-xl">
          <strong>Testimonials</strong>
        </h3>
        {testimonials.testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="">
              <img src={testimonial.image} alt="testimonoal image" />
            </div>
            <p className="">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
