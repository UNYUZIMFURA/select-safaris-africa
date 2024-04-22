import Question from "./Question"

const FAQ = () => {
    const FAQS = [
        {
            question: "What are the visa requirements?",
            answer: "Visa requirements vary. It's advisable to check with Rwandan authorities or consult our agency for assistance in obtaining the necessary travel documentation.",
        },
        {
            question: "What is the climate like in Rwanda?",
            answer: "Rwanda has a temperate tropical highland climate, with two rainy seasons and two dry seasons. Temperatures are relatively consistent year-round, with cooler temperatures in the mountains.",
        },
        {
            question: "When is the best time to visit Rwanda?",
            answer: "The best times to visit are June-September and December-February. These periods offer optimal conditions for trekking and wildlife viewing, with each season offering unique experiences.",
        },
        {
            question: "What transportation options are available?",
            answer: "There are various transportation options, including rental cars, private drivers, public buses, and moto-taxis. Our agency can provide tailored transportation assistance to suit your needs.",
        },
        {
            question: "Can I take photos in Rwanda?",
            answer: "Absolutely! Capture stunning landscapes, culture, and wildlife. Remember to respect privacy and customs, seek permission for people photos, and embrace Rwanda's beauty through your lens.",
        },
        {
            question: "What culinary delights can I expect?",
            answer: "Rwanda offers a diverse cuisine including 'Ugali,' 'Isombe,' 'Brochettes,' alongside international dishes. Restaurants, cafes, and street vendors cater to various tastes and preferences.",
        },
    ]

    return (
        <section className="flex flex-col items-center bg-white py-14 text-center">
            <span className="text-lg font-bold text-brand lg:text-xl">FAQ</span>
            <div className="flex flex-col gap-5 px-2 py-8">
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
    )
}

export default FAQ
