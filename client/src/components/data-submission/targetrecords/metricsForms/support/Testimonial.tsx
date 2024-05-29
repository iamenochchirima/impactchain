

const Testimonial = ({ testimonial, handleRemoveTestimonial, index }) => {
  const concatTestimonial = (testimonial) => {
    return testimonial.length > 40
      ? testimonial.slice(0, 40) + "..."
      : testimonial;
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-3  p-2 rounded bg-gray-600 ">
        <div className="flex flex-col">
          <span className="text-white">
            {concatTestimonial(testimonial.description)}
          </span>
        </div>
        <button
          onClick={() => handleRemoveTestimonial(index)}
          className="text-custom-green"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
