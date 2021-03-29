import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    cells: Array(9).fill(null),
    count: 0,
  };

  clickHandler = (e) => {
    const data = e.target.getAttribute("data");
    const currentCells = this.state.cells;

    if (currentCells[data] === null) {
      currentCells[data] = this.state.count % 2 === 0 ? "X" : "0";
      this.setState({ count: this.state.count + 1 });
      this.setState({ cells: currentCells });
    } else {
      return;
    }
    this.winnerCheck();
  };

  winnerCheck = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const clickedCell = this.state.count % 2 === 0 ? "X" : "0";

    for (let i = 0; i < 8; i++) {
      const line = winningLines[i];
      if (
        this.state.cells[line[0]] === clickedCell &&
        this.state.cells[line[1]] === clickedCell &&
        this.state.cells[line[2]] === clickedCell
      ) {
        alert(`${clickedCell} won. Congratulations!`);
      }
    }
  };

  buttonHandler = (e) => {
    this.setState({ cells: Array(9).fill(null) });
    this.setState({ count: 0 });
  };

  render() {
    const { cells } = this.state;

    return (
      <>
        <h1 className="title">Tic-Tac-Toe Game</h1>
        <div className="game">
          <div className="game__cell" onClick={this.clickHandler} data="0">
            {cells[0]}
          </div>
          <div className="game__cell" onClick={this.clickHandler} data="1">
            {cells[1]}
          </div>
          <div className="game__cell" onClick={this.clickHandler} data="2">
            {cells[2]}
          </div>
          <div className="game__cell" onClick={this.clickHandler} data="3">
            {cells[3]}
          </div>
          <div className="game__cell" onClick={this.clickHandler} data="4">
            {cells[4]}
          </div>
          <div className="game__cell" onClick={this.clickHandler} data="5">
            {cells[5]}
          </div>
          <div className="game__cell" onClick={this.clickHandler} data="6">
            {cells[6]}
          </div>
          <div className="game__cell" onClick={this.clickHandler} data="7">
            {cells[7]}
          </div>
          <div className="game__cell" onClick={this.clickHandler} data="8">
            {cells[8]}
          </div>
        </div>
        <button className="clear-button" onClick={this.buttonHandler}>
          Clear
        </button>
      </>
    );
  }
}

export default App;
