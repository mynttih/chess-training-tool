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
    this.pieceLookup = {wp: '', wn: 'N', wb: 'B', wq: 'Q', wk: 'K', bp: '', bn: 'N', bb: 'B', bq: 'Q', bk: 'K'}
  }

  componentDidMount() {
    let board = new Chessboard(this.boardRef.current, { position: "start", moveInputMode: MOVE_INPUT_MODE.dragPiece })
    board.enableMoveInput((event) => {
      switch (event.type) {
        case INPUT_EVENT_TYPE.moveStart:
            console.log(`moveStart: ${event.square}`)
            this.setState({
              legalMoves : this.chess.moves({square: event.square})
            })
            return true
        case INPUT_EVENT_TYPE.moveDone:
            console.log(`moveDone: ${event.squareFrom}-${event.squareTo}`)
            const piece = this.state.board.getPiece(event.squareFrom)
            const piecePrefix = this.pieceLookup[piece]
            const moveToValidate = piecePrefix + event.squareTo
            console.log(moveToValidate)
            return this.state.legalMoves.includes(moveToValidate) ? true : false
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
