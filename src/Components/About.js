import author from '../assets/author-image.png'
import signature from '../assets/Lora Chaffins.png'
function About() {
  return (
    <div className="col-lg-3">
      <div className="about-author">
        <img src={author} alt />
        <h2>About me</h2>
        <p>
          Bibendum ultrices venenatis, id id sed mass commodo eros duis ut cras
          neque. Vel non nibh vestibulum massa ullamcorper.
        </p>
        <img src={signature} alt />
      </div>
      <hr />
    </div>
  )
}

export default About
