import main from '../assets/main-background.png'

function Main() {
  return (
    <main
      className="main"
      style={{ background: `url(${main})` + 'no-repeat center center fixed' }}
    >
      <div className="content">
        <h4 className="date">Travel / Jan 22</h4>
        <h1 className="title">
          Make each and every steps happy <br />
          and joyful in your life
        </h1>
      </div>
    </main>
  )
}

export default Main
