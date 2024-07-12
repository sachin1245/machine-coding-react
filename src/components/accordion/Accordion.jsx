import React, { useState } from "react";
import "./Accordion.css";

const accordionItems = [
  {
    title: "Section 1",
    content:
      "Content for section 1 goes here. You can add any text or HTML here.",
  },
  {
    title: "Section 2",
    content:
      "Content for section 2 goes here. This section can be expanded or collapsed.",
  },
  {
    title: "Section 3",
    content:
      "This is the content for section 3. It can contain multiple paragraphs or other elements.",
  },
];

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={onToggle}>
        {title}
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
