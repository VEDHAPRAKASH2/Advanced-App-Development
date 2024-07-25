import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const nav = useNavigate();

    return (
        <div className="about-page">
            <h1>Welcome to  <u style={{cursor:'pointer',fontStyle:"italic"}} onClick={() => {nav('/')}}>Bounty Basket</u></h1>
            <p>
                At Bounty Basket, we believe in making your grocery shopping experience not just convenient, but delightful. Our mission is to provide you with a seamless shopping experience right at your fingertips, ensuring you have access to a wide range of products at competitive prices, all from the comfort of your home or on the go.
            </p>

            <h2>Why Choose Bounty Basket?</h2>
            <ul>
                <li><strong>Wide Selection:</strong> We offer a diverse range of products, from fresh produce to pantry staples, ensuring there's something for every taste and need.</li>
                <li><strong>Convenience:</strong> Skip the queues and shop anytime, anywhere with our user-friendly mobile app. Whether you're stocking up for the week or grabbing a last-minute item, we've got you covered.</li>
                <li><strong>Quality Assurance:</strong> We partner with trusted suppliers and vendors to ensure that every product meets our high standards of quality and freshness.</li>
                <li><strong>Personalized Experience:</strong> Tailor your shopping experience with personalized recommendations based on your preferences and previous purchases.</li>
                <li><strong>Savings:</strong> Enjoy competitive prices and exclusive deals that help you save money without compromising on quality.</li>
            </ul>

            <h2>Our Commitment to You</h2>
            <p>
                At Bounty Basket, we are committed to customer satisfaction. We value your feedback and continuously strive to enhance our services to meet your evolving needs. Whether you're a busy professional, a parent juggling multiple tasks, or simply someone who values convenience, Bounty Basket is here to make your life easier.
            </p>
        </div>
    );
};

export default About;

