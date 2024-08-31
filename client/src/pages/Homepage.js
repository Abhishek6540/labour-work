import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';

const Homepage = () => {

    return (
        <>
            <NavBar />
            {/* Container */}
            <div className="container flex justify-between mt-4">
                {/* Left Sidebar */}
                <div className="left-sidebar">
                    <div className="imp-links">
                        <a href="#"><img src="images/news.png" alt="News" />Latest News</a>
                        <a href="#"><img src="images/friends.png" alt="Friends" />Friends</a>
                        <a href="#"><img src="images/group.png" alt="Groups" />Groups</a>
                        <a href="#"><img src="images/marketplace.png" alt="Marketplace" />Marketplace</a>
                        <a href="#"><img src="images/watch.png" alt="Watch" />Watch</a>
                        <a href="#">See More</a>
                    </div>
                    <div className="shortcut-links">
                        <p>Your shortcuts</p>
                        <a href="#"><img src="images/shortcut-1.png" alt="Web Developers" />Web Developers</a>
                        <a href="#"><img src="images/shortcut-2.png" alt="Web Design course" />Web Design course</a>
                        <a href="#"><img src="images/shortcut-3.png" alt="Full stack Development" />Full stack Development</a>
                        <a href="#"><img src="images/shortcut-3.png" alt="Website Experts" />Website Experts</a>
                    </div>
                </div>

                {/* Main Content */}
                <div class="main-content">

                    <div class="story-gallery">
                        <div class="story story1">
                            <img src="images/upload.png" alt="" />
                            <p>Post Story</p>
                        </div>
                        <div class="story story2">
                            <img src="images/member-1.png" alt="" />
                            <p>Alisha Lian</p>
                        </div>
                        <div class="story story3">
                            <img src="images/member-2.png" alt="" />
                            <p>Jason Roy</p>
                        </div>
                        <div class="story story4">
                            <img src="images/member-3.png" alt="" />
                            <p>Lilly Groff</p>
                        </div>
                        <div class="story story5">
                            <img src="images/member-4.png" alt="" />
                            <p>Sam Billings</p>
                        </div>
                    </div>

                    <div class="write-post-container">
                        <div class="user-profile">
                            <img src="images/profile-pic.png" alt="" />
                            <div>
                                <p>John Gray</p>
                                <small>Public <i class="fa-solid fa-caret-down"></i></small>
                            </div>
                        </div>

                        <div class="post-input-container">
                            <textarea rows="3" placeholder="What's on your mind John"></textarea>

                            <div class="add-post-links">
                                <a href="#"><img src="images/live-video.png" alt="" />Live Video</a>
                                <a href="#"><img src="images/photo.png" alt="" />Photo/Video</a>
                                <a href="#"><img src="images/feeling.png" alt="" />Feeling Activity</a>

                            </div>
                        </div>

                    </div>



                    <div class="post-container">

                        <div class="post-row">
                            <div class="user-profile">
                                <img src="images/profile-pic.png" alt="" />
                                <div>
                                    <p>John Gray</p>
                                    <span>
                                        March 04 2022, 03:42pm
                                    </span>
                                </div>
                            </div>
                            <a href="#"> <i class="fa-solid fa-ellipsis-v"></i></a>

                        </div>

                        <p class="post-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<span> Support us to grow. </span>
                            Reprehenderit maxime cum asperiores ab
                            accusamus cupiditate eligendi, velit error officiis? Eligendi? <a href="#">#JohnGray424</a>
                            <a href="#">#Github</a>
                        </p>
                        <img src="images/feed-image-1.png" class="post-img" alt="" />

                        <div class="post-row">

                            <div class="activity-icons">

                                <div><img src="images/like-blue.png" alt="" />120</div>
                                <div> <img src="images/comments.png" alt="" />50</div>
                                <div><img src="images/share.png" alt="" />45</div>

                            </div>

                            <div class="post-profile-icon">

                                <img src="images/profile-pic.png" alt="" /><i class="fa-solid fa-caret-down"></i>

                            </div>


                        </div>

                    </div>

                    <div class="post-container">

                        <div class="post-row">
                            <div class="user-profile">
                                <img src="images/member-1.png" alt="" />
                                <div>
                                    <p>Alisha Lian</p>
                                    <span>
                                        Feb 28 2022, 01:18pm
                                    </span>
                                </div>
                            </div>
                            <a href="#"> <i class="fa-solid fa-ellipsis-v"></i></a>

                        </div>

                        <p class="post-text">
                            Consectetur adipisicing elit.<span> Enjoing the Life at Fullest. </span>
                            Reprehenderit maxime cum asperiores ab
                            accusamus cupiditate eligendi, velit error officiis? Eligendi? <a href="#">#AlishaLian542</a>
                            <a href="#">#NightOut</a>
                        </p>
                        <img src="images/feed-image-2.png" class="post-img" alt="" />

                        <div class="post-row">

                            <div class="activity-icons">

                                <div><img src="images/like-blue.png" alt="" />458</div>
                                <div> <img src="images/comments.png" alt="" />226</div>
                                <div><img src="images/share.png" alt="" />124</div>

                            </div>

                            <div class="post-profile-icon">

                                <img src="images/profile-pic.png" alt="" /><i class="fa-solid fa-caret-down"></i>

                            </div>


                        </div>

                    </div>


                    <div class="post-container">

                        <div class="post-row">
                            <div class="user-profile">
                                <img src="images/member-3.png" alt="" />
                                <div>
                                    <p>Lily Groff</p>
                                    <span>
                                        Jan 26 2022, 11:45am
                                    </span>
                                </div>
                            </div>
                            <a href="#"> <i class="fa-solid fa-ellipsis-v"></i></a>

                        </div>

                        <p class="post-text">
                            Dolor sit amet consectetur adipisicing elit. <span> Moments with Friends. </span>
                            Voluptate vel nostrum error dolore in quibusdam illo perspiciatis culpa! Voluptate magnam culpa
                            provident!
                            <a href="#">#LillyGroff456</a> <a href="#">#Friends4Ever</a>
                        </p>
                        <img src="images/feed-image-3.png" class="post-img" alt="" />

                        <div class="post-row">

                            <div class="activity-icons">

                                <div><img src="images/like-blue.png" alt="" />120</div>
                                <div> <img src="images/comments.png" alt="" />50</div>
                                <div><img src="images/share.png" alt="" />45</div>

                            </div>

                            <div class="post-profile-icon">

                                <img src="images/profile-pic.png" alt="" /><i class="fa-solid fa-caret-down"></i>

                            </div>


                        </div>

                    </div>


                    <div class="post-container">

                        <div class="post-row">
                            <div class="user-profile">
                                <img src="images/member-6.png" alt="" />
                                <div>
                                    <p>Anne Marry</p>
                                    <span>
                                        Jan 21 2022, 09:35am
                                    </span>
                                </div>
                            </div>
                            <a href="#"> <i class="fa-solid fa-ellipsis-v"></i></a>

                        </div>

                        <p class="post-text">
                            Amet Lorem, ipsum. it amet consectetur adipisicing elit. <span> Only good vibes </span>
                            Voluptate vel nostrum error dolore in quibusdam illo perspiciatis culpa! Voluptate magnam culpa
                            provident!
                            <a href="#">#Morningvibes</a> <a href="#">#WorklngLife</a>
                        </p>
                        <img src="images/feed-image-4.png" class="post-img" alt="" />

                        <div class="post-row">

                            <div class="activity-icons">

                                <div><img src="images/like-blue.png" alt="" />854</div>
                                <div> <img src="images/comments.png" alt="" />256</div>
                                <div><img src="images/share.png" alt="" />125</div>

                            </div>

                            <div class="post-profile-icon">

                                <img src="images/profile-pic.png" alt="" /><i class="fa-solid fa-caret-down"></i>

                            </div>


                        </div>

                    </div>




                    <div class="post-container">

                        <div class="post-row">
                            <div class="user-profile">
                                <img src="images/member-2.png" alt="" />
                                <div>
                                    <p>Jason Roy</p>
                                    <span>
                                        Jan 19 2022, 10:12am
                                    </span>
                                </div>
                            </div>
                            <a href="#"> <i class="fa-solid fa-ellipsis-v"></i></a>

                        </div>

                        <p class="post-text">
                            Quae cupiditate harum ullam quod! <span> Findig the Solutions.
                            </span>
                            Voluptate vel nostrum error dolore in quibusdam illo perspiciatis culpa! Voluptate magnam culpa
                            provident!
                            <a href="#">#Meeting</a> <a href="#">#OfficeCulture</a>
                        </p>
                        <img src="images/feed-image-5.png" class="post-img" alt="" />

                        <div class="post-row">

                            <div class="activity-icons">

                                <div><img src="images/like-blue.png" alt="" />452</div>
                                <div> <img src="images/comments.png" alt="" />127</div>
                                <div><img src="images/share.png" alt="" />38</div>

                            </div>

                            <div class="post-profile-icon">

                                <img src="images/profile-pic.png" alt="" /><i class="fa-solid fa-caret-down"></i>

                            </div>


                        </div>

                    </div>

                    <button type="button" class="load-more-btn">Load More </button>


                </div>

                {/* Right Sidebar */}
                <div class="right-sidebar">
                    <div class="sidebar-title">
                        <h4>Events</h4>
                        <a href="#">See All</a>
                    </div>

                    <div class="event">
                        <div class="left-event">
                            <h3>25</h3>
                            <span>March</span>
                        </div>
                        <div class="right-event">
                            <h4>Social Media</h4>
                            <p><i class="fa-solid fa-location-dot"></i> New Delhi</p>
                            <a href="#">More Info</a>


                        </div>
                    </div>
                    <div class="event">
                        <div class="left-event">
                            <h3>29</h3>
                            <span>March</span>
                        </div>
                        <div class="right-event">
                            <h4> Technical Meet </h4>
                            <p><i class="fa-solid fa-location-dot"></i> Noida, India</p>
                            <a href="#">More Info</a>


                        </div>
                    </div>
                    <div class="sidebar-title">
                        <h4>Advertisement</h4>
                        <a href="#">Close</a>
                    </div>
                    <img src="images/advertisement.png" class="sidebar-ads" alt="" />

                    <div class="sidebar-title">
                        <h4>Conversations</h4>
                        <a href="#">Hide chat</a>
                    </div>

                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-1.png" alt="" />
                        </div>
                        <p>Alisha Lian</p>
                    </div>
                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-2.png" alt="" />
                        </div>
                        <p>Jason Roy</p>
                    </div>
                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-3.png" alt="" />
                        </div>
                        <p>Lilly Groff</p>
                    </div>
                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-4.png" alt="" />
                        </div>
                        <p>Sam Billings</p>
                    </div>
                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-5.png" alt="" />
                        </div>
                        <p>Jack Billy</p>
                    </div>
                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-6.png" alt="" />
                        </div>
                        <p>Anne Marry</p>
                    </div>
                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-7.png" alt="" />
                        </div>
                        <p>Adam</p>
                    </div>
                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-8.png" alt="" />
                        </div>
                        <p>Marison</p>
                    </div>
                    <div class="online-list">
                        <div class="online">
                            <img src="images/member-9.png" alt="" />
                        </div>
                        <p>Joe Rider</p>
                    </div>


                </div>

            </div>
            
            <Footer />
        </>
    );
};

export default Homepage;
