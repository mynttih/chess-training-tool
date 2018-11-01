import Chess from 'chess.js'
import {Chessboard, COLOR, INPUT_EVENT_TYPE, MOVE_INPUT_MODE} from 'cm-chessboard'
import React, { Component } from 'react'

class BoardComponent extends Component {
  constructor() {
    super()
    this.board = null
    this.boardRef = React.createRef()
    this.chess = new Chess()
    this.legalMoves = null
  }

  componentDidMount() {
    let board = new Chessboard(this.boardRef.current, { position: "start", moveInputMode: MOVE_INPUT_MODE.dragPiece })
    board.enableMoveInput((event) => {
      switch (event.type) {
        case INPUT_EVENT_TYPE.moveStart:
            console.log(`moveStart: ${event.square}`)
            // return `true`, if input is accepted/valid, `false` aborts the interaction, the piece will not move
            this.setState({
              legalMoves : this.chess.moves({square: event.square})
            })
            return true
        case INPUT_EVENT_TYPE.moveDone:
            console.log(`moveDone: ${event.squareFrom}-${event.squareTo}`)
            // return true, if input is accepted/valid, `false` takes the move back
            console.log(this.state.legalMoves.includes(event.squareTo))
            return this.state.legalMoves.includes(event.squareTo) ? true : false
        case INPUT_EVENT_TYPE.moveCanceled:
            console.log(`moveCanceled`)
    }
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

export default BoardComponent
