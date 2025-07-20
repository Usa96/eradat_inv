import React from 'react';
interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}
const Testimonial = ({
  quote,
  name,
  title,
  image
}: TestimonialProps) => {
  return <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>;
};
export const Testimonials = () => {
  const testimonials = [{
    id: 1,
    quote: "I've been investing with PrimeInvest for 3 years now, and my portfolio has seen consistent returns of 12-14% annually. Their team is responsive and the platform makes tracking my investments simple.",
    name: 'Michael Roberts',
    title: 'Retired Financial Advisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  }, {
    id: 2,
    quote: 'As a busy professional, I needed a hands-off investment that still delivered strong returns. PrimeInvest has exceeded my expectations with their property selection and management.',
    name: 'Sarah Johnson',
    title: 'Tech Executive',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  }, {
    id: 3,
    quote: "The transparency and detailed analytics that PrimeInvest provides give me confidence in my investments. I've recommended them to several colleagues who are equally impressed.",
    name: 'David Chen',
    title: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  }];
  return <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Investors Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from some of our satisfied
            investors who have built wealth with PrimeInvest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <Testimonial key={testimonial.id} quote={testimonial.quote} name={testimonial.name} title={testimonial.title} image={testimonial.image} />)}
        </div>
      </div>
    </section>;
};