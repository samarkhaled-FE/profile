export interface Testimonial {
  name: string;
  position: string;
  company?: string;
  text: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    position: 'CEO at TechStart',
    text: 'John completely transformed our website. His attention to detail and technical expertise significantly improved our user experience and conversion rates.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Michael Chen',
    position: 'Product Manager',
    company: 'Innovate Solutions',
    text: 'Working with John was a pleasure. He took our vague concept and turned it into a beautiful, functional web application that exceeded our expectations.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Emma Rodriguez',
    position: 'Marketing Director',
    company: 'Growth Brands',
    text: 'John is not just a developer but a problem solver. He understood our business needs and delivered a solution that helped us grow our online presence dramatically.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'David Kim',
    position: 'Startup Founder',
    text: 'As a startup with limited resources, working with John was the best decision we made. He delivered high-quality work within our budget and timeline constraints.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];