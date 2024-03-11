function Open(props) {
  let time = new Date().getFullYear();
  return (
    <section className="open">
      <div className="open-container">
        <img src="./icon.webp" className="open-image" />
        <h1 className="open-head">LegoQuiz</h1>
        <p className="oped-description">
          Get to know much concepts about Computing by answering simple Quiz.
        </p>
        <button className="open-btn" onClick={props.game}>
          Start Quiz
        </button>
        <footer>Copyright &copy; {time} By Legolas Technologies</footer>
      </div>
    </section>
  );
}

export default Open;
