import React from 'react'
import { styles } from '../../../../../styles/styles'
import Testimonial from './Testimonial'

const AddTestimonial = ({testimonials, handleCancelTestimonial, setTestimonialDescription, testimonialDescription, handleRemoveTestimonial, testimonialFile, handleTestimonialFileChange, handleAddTestimonial}) => {
  return (
    <div className={styles.testimonialDiv}>
            <h3 className={styles.testimonialTitle}>
              {" "}
              Add Testimonials (Optional)
            </h3>
            {testimonials.length > 0 && (
              <div className={styles.testmoCardDiv}>
                {testimonials.map((testimonial, index) => (
                  <Testimonial
                    {...{ testimonial, handleRemoveTestimonial, index }}
                  />
                ))}
              </div>
            )}
            <div className={styles.inputDiv}>
              <label htmlFor={styles.testimonialLabel}>
                Please provide a description of the testimonial.
              </label>
              <textarea
                className={styles.textAreaInput}
                id="testimonialDescription"
                placeholder="Provide a description of the testimonial."
                value={testimonialDescription}
                onChange={(e) => setTestimonialDescription(e.target.value)}
                required
              />
            </div>
            {testimonialFile && (
                <div className={styles.testimoUploadDiv}>
                  <p className={styles.testimoFileName}>
                    {testimonialFile.name}
                  </p>
                </div>
              )}
            <div className={styles.inputDiv}>
              <input
                type="file"
                id="testimonialFile"
                onChange={handleTestimonialFileChange}
                accept="image/*"
                className="hidden"
              />
              <button>
                <label
                  htmlFor="testimonialFile"
                  className={styles.roundedButton}
                >
                  {testimonialFile ? "Change File" : "Upload Testimonial Image, Max 4MB"}
                </label>
              </button>
             
            </div>
            <div className={styles.testmoButtonDiv}>
              {testimonialDescription && testimonialFile && (
                <button
                  onClick={handleCancelTestimonial}
                  className={styles.testimoCancelBtn}
                >Cancel</button>
              )}
              <button
                onClick={handleAddTestimonial}
                className={styles.roundedButton}
              >
                Add
              </button>
            </div>
          </div>
  )
}

export default AddTestimonial