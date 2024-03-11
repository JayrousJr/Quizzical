function Open(props) {
  return (
    <section className="open">
      <div className="open-container">
        <img src="./icon.webp" className="open-image" />
        <h1 className="open-head">Quizzical</h1>
        <p className="oped-description">
          Here are some descroption about the Web App
        </p>
        <button className="open-btn" onClick={props.game}>
          Start Quiz
        </button>
      </div>
    </section>
  );
}

export default Open;
