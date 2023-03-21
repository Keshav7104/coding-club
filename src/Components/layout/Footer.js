import React from 'react';
import './Footer.css';

export default function Footer () {  
    return(
<>
    {/* <section>Footer Example 4</section> */}
	<div className="down">
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Coding<span>Pundits</span></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home </a>
				
					<a href="#">Documentation </a>
				
					<a href="#">Events </a>
					
					<a href="#">Our Team </a>
					
					<a href="#">Alumni </a>

					<a href="#">Register</a>
				</p>

				<p className="footer-company-name">Coding Pundits © 2023</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Jote, District:Papum Pare
 </span> Arunachal Pradesh,<span>India - 791113</span> </p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p> +91 0360-2954549</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:nitapadmin@nitap.ac.in">nitapadmin@nitap.ac.in</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the Club</span>
					Coding Pundits aims to establish a coding culture on campus, reaching every student passionate about coding.<br></br> Here you'll be able to collaborate with others, learn from them and indeed teach them things you know. 
				</p>
				</div>
				<div className="footer-icons">
					<a href="#"><i className="fab fa-facebook-f"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>


			</div>
			
		</footer>
		</div>
		
        </>
)}

