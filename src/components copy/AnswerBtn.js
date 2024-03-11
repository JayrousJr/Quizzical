function AnswerBtn({ answer, isSelected, onClick, correct }) {
  const styles = {
    backgroundColor: isSelected ? "#d2d4f1" : "",
  };
  return (
    <div className="" style={styles} onClick={onClick}>
      {answer}
    </div>
  );
}

export default AnswerBtn;
