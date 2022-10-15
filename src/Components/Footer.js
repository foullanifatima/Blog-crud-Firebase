import logo from '../assets/travelMile..png'
function Footer() {
  return (
    <footer className="container">
      <div className="row justify-content-center align-items-center">
        <div
          className="col-lg-4 col-md-4 col-sm-12"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          <img src={logo} alt="Logo goes here" />
          <p>
            Cursus vulputate quam pellentesque consequat. Id volutpat et natoque
            enim faucibus. Sem vel fringilla feugiat massa in gravida. Netus
            fringilla vel laoreet suscipit.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
