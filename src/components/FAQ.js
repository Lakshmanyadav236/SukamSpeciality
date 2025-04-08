import React, { useState } from "react";
import "./FAQ.css"; // Import the CSS file

const faqData = [
  {
    question: "How much does IVF treatment cost in Bangalore?",
    answer:
      "The cost of IVF treatment in Bangalore may vary depending on individual circumstances and treatment requirements. At Garbhagudi IVF Centre, we offer various IVF packages.",
  },
  {
    question: "Which IVF clinic has the highest success rate in Bangalore?",
    answer: "Success rates vary by clinic and patient conditions. It’s best to check with the clinics directly for their latest success rates.",
  },
  {
    question: "Does GarbhaGudi Hospital provide fertility treatment?",
    answer: "Yes, GarbhaGudi Hospital provides a range of fertility treatments including IVF, IUI, and more.",
  },
  {
    question: "Why choose GarbhaGudi Hospital to get IVF treatment?",
    answer: "GarbhaGudi Hospital is known for its high success rates, experienced doctors, and advanced fertility treatments.",
  },
  {
    question: "Does GarbhaGudi Hospital provide fertility treatment?",
    answer: "Yes, GarbhaGudi Hospital provides a range of fertility treatments including IVF, IUI, and more.",
  },
  {
    question: "Why choose GarbhaGudi Hospital to get IVF treatment?",
    answer: "GarbhaGudi Hospital is known for its high success rates, experienced doctors, and advanced fertility treatments.",
  },
  {
    question: "Who is the best infertility doctor in Bangalore?",
    answer: "There are several renowned infertility doctors in Bangalore. It’s best to consult based on experience, patient reviews, and treatment approaches.",
  },
  {
    question: "Is IVF 100% accurate?",
    answer: "No, IVF success depends on various factors including age, health conditions, and medical history.",
  },
  {
    question: "Does insurance cover IVF cost in India?",
    answer: "Some insurance policies cover fertility treatments, but it's recommended to check with your insurance provider.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "˄" : "˅"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
