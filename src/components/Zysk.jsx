import React from 'react'
import "./Zysk.css"
import image1 from "../images/1.png"
import Profile from "../images/Profile.jpg"
import users from "../images/image.png"
import blog1 from "../images/image1.png"
import blog2 from "../images/image2.png"
import blog3 from "../images/image3.png"
import logo from "../assets/react.svg"

const Zysk = () => {
  return (
    <div className='Main'>
      <nav>
      <h3><img src={logo} alt="" width="40px" style={{marginRight:"10px"}} /> Untitled UI</h3>
            <p>Home</p>
            <label htmlFor="">Products</label>
            <select>Products</select>
            <label htmlFor="">Resources</label>
            <select name="Resources" id="">Resousrces</select>
            <p>Pricing</p>
      </nav>
      <div className='div1'>
      <hr />
      <button className='newfeaturebtn'><span>New Feature</span> Check Out the team dashboard</button>
      <h1 className='heading1'>Beautiful analytics to grow smarter</h1>
      <p style={{textAlign:"center"}}>Powerful, self-serve product and growth analytics to help you convert, engage,<br /> and retain more users. Trusted by over 4,000 startups</p>
      <div className='buttons1'>
        <button className='demo'><i class="fa-regular fa-circle-play"></i> Demo</button>
        <button className='signup' style={{marginLeft:"-40px"}}>Sign up</button>
      </div>
      <img src={image1} alt="" width="700px" height="450px" style={{borderRadius:"15px",margin:"20px"}} />
      </div>
      <div className='div2'> 
        <p>Join 4,000+ companies already growing</p>
        <div className='div2logos'>
        <h3> Boltshift</h3>
        <h3> Lightbox</h3>
        <h3>FeatherDev</h3>
        <h3>Spherule</h3>
        <h3>GlobalBank</h3>
        <h3>Neitzsche</h3>
        </div>
        <hr />
        <div className='div3'>
          <p className='features'>Features</p>
          <h2>Analytics that feels like it's from the future</h2>
          <p style={{textAlign:"center",marginTop:"-5px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestias numquam saepe iusto nesciunt hic eos consequuntur, fugit fugiat sint.</p>
        </div>
        <div className='cards'>

        <div className='card'>
          <i class="fa-regular fa-message"></i>
          <h2>Share team inboxes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemo  quidem ipsa! Doloremque, adipisci officiis.</p>
          </div>          <div className='card'>
          <i class="fa-regular fa-user"></i>
          <h2>Share team inboxes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemo  quidem ipsa! Doloremque, adipisci officiis.</p>
          </div>          <div className='card'>
          <i class="fa-solid fa-truck-fast"></i>
          <h2>Share team inboxes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemo  quidem ipsa! Doloremque, adipisci officiis.</p>
          </div>          <div className='card'>
          <i class="fa-regular fa-heart"></i>
          <h2>Share team inboxes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemo  quidem ipsa! Doloremque, adipisci officiis.</p>
          </div>          <div className='card'>
          <i class="fa-solid fa-phone"></i>
          <h2>Share team inboxes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemo  quidem ipsa! Doloremque, adipisci officiis.</p>
          </div>          <div className='card'>
          <i class="fa-solid fa-shield-halved"></i>
          <h2>Share team inboxes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemo quidem ipsa! Doloremque, adipisci officiis.</p>
          </div>
          <div className='Sisyphus'>
            <p><i class="fa-solid fa-bolt" style={{color:"green"}}></i>Sisyphus</p>
            <h2>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Ex, praesentium?</h2>
            <img src={Profile} alt="" width="50px" style={{borderRadius:"50%"}}/>
            <h4>Candice Wu</h4>
            <h6 style={{marginTop:"-20px",fontWeight:"lighter"}}>Product Manger, Sisyphus</h6>
          </div>
          <hr />
        </div>
        <div className='div4'>
          <button className='features'>Features</button>
          <h1>Cutting-edge features for advanced Analytics</h1>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam vero recusandae veritatis ipsa suscipit ab consectetur sed perferendis quaerat officia!</h4>
          <img src={image1} alt="" width="700px" height="450px" style={{borderRadius:"15px"}}/>
        </div>
        <div className='cards2'>
        <div className='card'>
  <i class="fa-regular fa-message"></i>
  <h2>Share team inboxes</h2>
  <p>Lorem ipsum dolor sit amet consecteturadipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemo quidem ipsa! Doloremque, adipisci officiis.</p>
  <button>Learn More <i class="fa-solid fa-arrow-right"></i></button>
  </div>
  <div className='card'>
  <i class="fa-regular fa-star"></i>
  <h2>Share team inboxes</h2>
  <p>Lorem ipsum dolor sit amet consecteturadipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemoquidem ipsa! Doloremque, adipisci officiis.</p>
  <button>Learn More <i class="fa-solid fa-arrow-right"></i></button>
  </div>
  <div className='card'>
  <i class="fa-regular fa-heart"></i>
  <h2>Share team inboxes</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt dolorem inventore fugiat, repellat nemo  quidem ipsa! Doloremque, adipisci officiis.</p>
  <button>Learn More <i class="fa-solid fa-arrow-right"></i></button>
  </div>
        </div>
        <div className='questions'>
          <h2> Frequnetly Asked Questions</h2>
          <p>Everything you need to know about the product and billing.</p>
          <div className='question'>
            <h4>is there a free trail available? <i class="fa-solid fa-circle-minus" ></i> </h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque fugiat inventore autem hic numquam, nobis voluptatem doloribus similique, corporis obcaecati iste illo. Deleniti placeat, ut adipisci est maxime magnam reiciendis!</p>
          </div>
          <div className='question1'>
            <h4>Can i chnage my plans later ? <i class="fa-solid fa-circle-plus" ></i> </h4>
            <hr />
          </div>
          <div className='question1'>
            <h4>What is your cancellation policy ? <i class="fa-solid fa-circle-plus" ></i> </h4>
            <hr />
          </div>
          <div className='question1'>
            <h4>Can other info be added to an invoice ? <i class="fa-solid fa-circle-plus" ></i> </h4>
            <hr />
          </div>
          <div className='question1'>
            <h4>How does billing work ? <i class="fa-solid fa-circle-plus" ></i> </h4>
            <hr />
          </div>
          <div className='question1 questionn'>
            <h4>How do i chnage my account email ? <i class="fa-solid fa-circle-plus" ></i> </h4>
            <hr />
          </div>
        </div>
        <div className='xtra'>
          <img src={users} alt="" width="250px"/>
          <h2>Stil have questions ?</h2>
          <p>Can't find the answer yourse looking for ? Please chat to our friendly team.</p>
          <button>Get in touch</button>
        </div>
        <div className='blogHead'>
          <hr />
          <p>Our Blog</p>
          <h2>Latest blog posts <button>View all posts</button></h2>
          <h5>Tool and strategies modern teams need to help thier companies grow.</h5>
        </div>
        <div className='blogcards'>
          <div className='blogcard'>
          <img src={blog1} alt="" width="220px" />
          <h5>Design</h5>
          <h3>UX review presentations <i class="fa-solid fa-arrow-trend-up"></i></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem officiis quo voluptatum nisi ut.</p>
          <div className='uploader'>
            <img src={Profile} alt="" width="40px" height="40px" style={{borderRadius:"50%"}}/>
            <h4>Olivia Rhye <br /><span>20 Jan 2024</span></h4>
          </div>
          </div>
          <div className='blogcard'>
          <img src={blog2} alt="" width="220px" />
          <h5>Design</h5>
          <h3>UX review presentations <i class="fa-solid fa-arrow-trend-up"></i></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem officiis quo voluptatum nisi ut.</p>
          <div className='uploader'>
            <img src={Profile} alt="" width="40px" height="40px" style={{borderRadius:"50%"}}/>
            <h4>Olivia Rhye <br /><span>20 Jan 2024</span></h4>
          </div>
          </div>
          <div className='blogcard'>
          <img src={blog3} alt="" width="220px" />
          <h5>Design</h5>
          <h3>UX review presentations <i class="fa-solid fa-arrow-trend-up"></i></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae exercitationem officiis quo voluptatum nisi ut.</p>
          <div className='uploader'>
            <img src={Profile} alt="" width="40px" height="40px" style={{borderRadius:"50%"}}/>
            <h4>Olivia Rhye <br /><span>20 Jan 2024</span></h4>
          </div>
          </div>
        </div>
        <div className='trial'>
            <h2>Start your free trial</h2>
            <p>Join Over 4,000+ startups already growing with Untitled</p>
            <div className='buttons1'>
            <button className='demo'>Learn More</button>
            <button className='signup'>Get Started</button>
            </div>
          </div>
          <div className='links'>
            <div className='link'>
              <p>Product</p>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview <span>New</span></h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
            </div>
            <div className='link'>
              <p>Product</p>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
            </div>
            <div className='link'>
              <p>Product</p>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
            </div>
            <div className='link'>
              <p>Product</p>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
            </div>
            <div className='link'>
              <p>Product</p>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
            </div>
            <div className='link'>
              <p>Product</p>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
              <h4>Overview</h4>
            </div>
          </div>
          <hr />
          <footer>
            <h4> <img src={logo} alt="" width="40px" style={{marginRight:"10px"}} />Untitled UI</h4>
            <span>@ 2077 Untitled UI. All rights reserved.</span>
          </footer>
      </div>
    </div>
  )
}

export default Zysk
