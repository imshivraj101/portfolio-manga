import './Hero.css'
import avatar from '../assets/avatar.png'
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="hero">
      {/* Top-right floating icons inside hero */}
      <div className="hero-icons-floating">
        <a href="#"><FaGithub /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaEnvelope /></a>
      </div>

      {/* Content */}
      <div className="hero-overlay">
        <div className="hero-left">
          <img src={avatar} alt="Shivraj avatar" className="hero-avatar" />
        </div>

        <div className="hero-right">
          <div className="hero-text">
            <p className="hero-greet">Hello, <br />I am</p>
            <h1 className="hero-name">SHIVRAJ !!!</h1>
            <p className="hero-subtitle">A final year Computer Science & Design Undergraduate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
