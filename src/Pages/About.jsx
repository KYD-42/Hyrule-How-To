function About() {
  return (
    <div className="about">
      <img src="src/assets/logo-w.svg" height={100} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id illo
        est ut aut quibusdam nesciunt ipsum excepturi pariatur delectus
        voluptatibus vitae, vero officiis esse laborum quos doloremque. Maiores,
        voluptates.
      </p>
      <section className="authors">
        <p>Developed by:</p>
        <p>Filipe Vieira & Pedro Lopes</p>
        <p>
          <a href="https://www.linkedin.com/in/filipe-santiago-956a4218a/">
            LinkedIn{" "}
          </a>
          <a href="https://github.com/KYD-42"> GitHub</a>
        </p>
      </section>
    </div>
  );
}

export default About;
