import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardList.css";

function BoardList({ boardList, selectBoard }) {
  const boardComponents = [];
  // const boardList = props.boardList;

  for (const board of boardList) {
    boardComponents.push(
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        selectBoard={selectBoard}
      />
    );
  }
  return (
    <div>
      <h2>Boards</h2>
      <div className="scroll">
        <ol>{boardComponents}</ol>
      </div>
    </div>
  );
}

BoardList.propTypes = {
  boardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  selectBoard: PropTypes.func.isRequired,
};

export default BoardList;
