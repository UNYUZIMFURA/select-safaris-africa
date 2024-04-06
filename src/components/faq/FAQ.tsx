import Question from "./Question";

const FAQ = () => {
  const FAQS = [
    {
      question: "Can I take a photo in Rwanda?",
      answer:
        "Absolutely! Rwanda's stunning landscapes, vibrant culture, and diverse wildlife provide countless opportunities for breathtaking photography. Capture the majestic volcanoes, lush forests, serene lakes, and fascinating wildlife encounters. Remember to respect local customs and privacy when photographing people and seek permission when necessary. Embrace the beauty of Rwanda through your lens and create lasting memories.",
    },
    {
      question: "What is the best time to visit Rwanda?",
      answer:
        "The best time to visit Rwanda is during the dry seasons, which occur from June to September and from December to February. These months offer optimal conditions for trekking and wildlife viewing, with clear skies and less rainfall. However, Rwanda can be visited year-round,and each season has its own unique attractions",
    },
    {
      question:
        "What transportation options are available for exploring Rwanda",
      answer:
        "Getting around Rwanda is convenient and diverse, with options to suit every traveler's preference and budget. From rental cars and private drivers to public buses and moto-taxis, there are various transportation modes available. Our agency can assist you in arranging transportation tailored to your needs.",
    },
    {
      question: "How do I book a trip to Rwanda?",
      answer:
        "With our agency, booking a trip to Rwanda is hassle-free. Visit our website to explore Rwanda's destinations. Fill out the booking form, confirm your details, and your journey begins. Our team handles all arrangements, ensuring seamless experiences. We prioritize personalized service, crafting itineraries tailored to your interests, guaranteeing an unforgettable Rwanda adventure.",
    },
    {
      question: "How do you accommodate travelers with disabilities?",
      answer:
        "Our agency ensures inclusivity, offering tailored arrangements for travelers with disabilities. From accessible accommodations to specialized transportation, we ensure every traveler enjoys a comfortable and memorable experience in Rwanda.",
    },
    {
      question:
        "What culinary delights can I expect to savor while visiting Rwanda?",
      answer:
        "Rwanda boasts a diverse culinary scene, offering both traditional and international cuisine. Indulge in local delicacies such as 'Ugali' (cassava bread), 'Isombe' (cassava leaves), and 'Brochettes' (grilled skewered meat), alongside globally inspired dishes. Restaurants, cafes, and street vendors across the country cater to various tastes and dietary preferences.",
    },
  ];
  return (
    <section className="flex flex-col py-14 bg-white items-center text-center">
      <div className="flex flex-col gap-4">
        <span className="text-brand font-bold text-lg">FAQ</span>
        <h2 className="text-xl tracking-wider font-bold lg:text-3xl">
         Frequently <span className="text-brand">Asked</span> Questions
        </h2>
      </div>
      <div className="flex flex-col gap-5 py-8 px-2">
        {FAQS.map((el, index) => (
          <Question
            id={index + 1}
            key={index}
            question={el.question}
            answer={el.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
