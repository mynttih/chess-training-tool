import {Chessboard} from 'cm-chessboard';
import React, { Component } from 'react';
import {MOVE_INPUT_MODE, COLOR} from 'cm-chessboard'

class BoardComponent extends Component {
  constructor() {
    super()
    this.boardRef = React.createRef();
    this.board = null;
  }

  componentDidMount() {
    let board = new Chessboard(this.boardRef.current, { position: "start", moveInputMode: MOVE_INPUT_MODE.dragPiece })
    board.enableMoveInput((event) => {
      console.log(event)
      return Math.random() < 0.4
    }, COLOR.white)
    this.setState({
      board: board
    })
  }

  render () {
    return (
      <div
        className="board"
        ref={this.boardRef}
      />
    );
  }
}

export default BoardComponent;
