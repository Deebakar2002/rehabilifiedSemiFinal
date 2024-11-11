import React, { useRef } from 'react';
import './CoursesHome.css';

// Sample Course Card Component
const CourseCard = ({ title, subTitle, description, imageUrl, price, discountedPrice }) => {
  return (
    <div className="courses-home-card">
      <img src={imageUrl} alt={title} className="courses-home-image" />
      <h3 className="courses-home-title">{title}</h3>
      <h4 className="courses-home-subtitle">{subTitle}</h4>
      <p className="courses-home-description">{description}</p>
      <div className="courses-home-prices">
        <span className="courses-home-price">${price}</span>
        <span className="courses-home-discounted-price">${discountedPrice}</span>
      </div>
      <button className="courses-home-enroll-button">Enroll Now</button>
    </div>
  );
};

// Main Courses Home Component
const CoursesHome = () => {
  const courses = [
    {
      title: 'Fundamentals of Physiotherapy',
      subTitle: 'Introduction to Physiotherapy Basics',
      description: 'Learn the core principles and methods used in physiotherapy.',
      imageUrl: 'images/home/courseshome.jpg',
      price: 199,
      discountedPrice: 99,
    },
    {
      title: 'Advanced Physiotherapy Techniques',
      subTitle: 'Deep Dive into Advanced Practices',
      description: 'Explore advanced techniques for treating injuries and improving mobility.',
      imageUrl: 'images/home/courseshome.jpg',
      price: 299,
      discountedPrice: 149,
    },
    {
      title: 'Rehabilitation and Recovery',
      subTitle: 'Therapeutic Exercises for Recovery',
      description: 'Specialized methods for rehabilitation and post-injury recovery.',
      imageUrl: 'images/home/courseshome.jpg',
      price: 249,
      discountedPrice: 129,
    },
    {
      title: 'Sports Physiotherapy',
      subTitle: 'Injury Prevention and Treatment for Athletes',
      description: 'Focused techniques for sports injury prevention and management.',
      imageUrl: 'images/home/courseshome.jpg',
      price: 350,
      discountedPrice: 199,
    },
    {
      title: 'Sports Physiotherapy',
      subTitle: 'Injury Prevention and Treatment for Athletes',
      description: 'Focused techniques for sports injury prevention and management.',
      imageUrl: 'images/home/courseshome.jpg',
      price: 350,
      discountedPrice: 199,
    },
    {
      title: 'Sports Physiotherapy',
      subTitle: 'Injury Prevention and Treatment for Athletes',
      description: 'Focused techniques for sports injury prevention and management.',
      imageUrl: 'images/home/courseshome.jpg',
      price: 350,
      discountedPrice: 199,
    },
    {
      title: 'Sports Physiotherapy',
      subTitle: 'Injury Prevention and Treatment for Athletes',
      description: 'Focused techniques for sports injury prevention and management.',
      imageUrl: 'images/home/courseshome.jpg',
      price: 350,
      discountedPrice: 199,
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="courses-home">
      <header className="courses-home-banner">
        <h1>Explore Our Physiotherapy Courses</h1>
        <p>Find the best courses to enhance your skills and knowledge in physiotherapy.</p>
      </header>

      <div className="courses-home-scroll-container">
        <button className="courses-home-scroll-arrow courses-home-left-arrow" onClick={scrollLeft}>&lt;</button>

        <div className="courses-home-list" ref={scrollRef}>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              subTitle={course.subTitle}
              description={course.description}
              imageUrl={course.imageUrl}
              price={course.price}
              discountedPrice={course.discountedPrice}
            />
          ))}
        </div>

        <button className="courses-home-scroll-arrow courses-home-right-arrow" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default CoursesHome;
