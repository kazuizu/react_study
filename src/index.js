import React from 'react';
/*render関数を使用するために必要なimport */
import ReactDOM from 'react-dom/client';
import './index.css';

/**
 * 正方形のマス目を作成するReactコンポーネント 
 * 
 */

class Square extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }
  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.props.onClick()}
      >
        {/* アロー関数を使用しない場合の書き方
        *<button className="square" onClick={function(){
        * console.log('click');
        *}}></button>
        */ }
        {/*Bordコンポーネントから子であるSquareコンポーネントにpropsをわたしている
        これにより盤面に数字が表示されるようになる */}
        {this.props.value}
      </button>
    );
  }
}

/**
 * 盤面を作成するReactコンポーネント
 */
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'x';
    this.setState({squares: squares});
  }
  
  renderSquare(i) {
    return (
    <Square 
      value = {this.state.squares[i]} 
      onClick={() => this.handleClick(i)}  
    />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
