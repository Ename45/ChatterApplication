import React from 'react'
import '../../../styles/components/dashboard/landingPage.css'
import analytics from '../../../assets/images/svg/analytics.svg'
import content from '../../../assets/images/svg/content.svg'
import group from '../../../assets/images/svg/group.svg'
import person1 from '../../../assets/images/svg/person1.svg'
import person2 from '../../../assets/images/svg/person2.svg'
import person3 from '../../../assets/images/svg/person3.svg'
import person4 from '../../../assets/images/svg/person4.svg'
import socials from '../../../assets/images/svg/socials.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
    <div class="main-container">
        <div class="inner-container">
            <div class="navbar">
                <div class="logo">
                    <p>CHATTER</p>
                </div>
                <div class="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blogs</a></li>
                    </ul>
                </div>
                <div class="nav-button">
                    <Link to="/login" class="button1">
                        <button className='btn'>Login</button>
                    </Link>
                    <Link to="/signUp" class="button2">
                        <button className='btn'>Sign up</button>
                    </Link>
                </div>
            </div>
            <div class="background-image-content">
                <div class="background-text">
                    <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
                    <p>unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
                    <Link to='/signUp' class="button2">
                        <button className='btn'>Get started</button>
                    </Link>
                </div>
            </div>
            <div class="content-container">
                <div class="about-outer-container">
                    <div class="about-chatter-text">
                        <h1>About Chatter</h1>
                        <p>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm's heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </p>
                    </div>
                    <div class="about-image">
                        <img src={group} alt=""/>
                    </div>
                </div>
                <div class="reason-to-join-container">
                    <div class="reason-text">
                        <h1>Why you should join chatter</h1>
                        <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people</p>
                    </div>  
                    <div class="reason-boxes">
                        <div class="boxes">
                            <div class="image">
                                <img src={analytics} alt="analytics graph"/>
                            </div>
                            <h1>Analytics</h1>
                            <p>Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time</p>
                        </div>
                        <div class="boxes">
                            <div class="image">
                                <img src={socials} alt="Social interactions"/>
                            </div>
                            <h1>Social interactions</h1>
                            <p>Users on the platform can interact with posts they like, comment and engage in discussions</p>
                        </div>
                        <div class="boxes">
                            <div class="image">
                                <img src={content} alt="Content creation"/>
                            </div>
                            <h1>Content creation</h1>
                            <p>Write nice and appealing with our in-built markdown, a rich text editor</p>
                        </div>
                    </div>           
                </div>            
            </div>    
                <div class="review-container">
                    <div class="review-image">
                        <img src={person1} alt="person review"/>
                    </div>
                    <div class="review-text">
                        <p>"Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.”</p>
                        <div class="reviewer-name-title">
                            <h1>Adebobola Muhydeen, </h1>
                            <p>Software developer at apple</p>
                        </div>
                        <Link to='/signUp' class="button2">
                            <button className='btn'>Join chatter</button>
                        </Link>
                    </div>
                </div>
                <div class="get-started">
                    <div class="get-started-inner">
                        <div class="images-box">
                            <div class="images-container">
                        <img class="img1" src={person2} alt=""/>
                        <img class="img2" src={person3} alt=""/>
                        <img class="img3" src={person4} alt=""/>
                    </div>
                        </div>
                    <div class="get-started-text">
                        <h1>Write, read and connect with great minds on chatter</h1>
                        <p>Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals  </p>
                        <Link to='/signUp' class="button2">
                            <button className='btn'>Get started</button>
                        </Link>
                    </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="logo">
                        <p>CHATTER</p>
                    </div>
                    <div class="footer_innerContainer">
                        <div class="footer_links">
                            <ul>
                            <h5>Explore</h5>
                            <li>community</li>
                            <li>Trending blogs</li>
                            <li>Chatter for teams</li>
                            </ul>
                        </div>
                        <div class="footer_links">
                            <ul>
                            <h5>Support</h5>
                            <li>Support docs</li>
                            <li>Join slack</li>
                            <li>Contact</li>
                            </ul>
                        </div>
                        <div class="footer_links">
                            <ul>
                            <h5>Official blog</h5>
                            <li>Official blog</li>
                            <li>Engineering blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default LandingPage;