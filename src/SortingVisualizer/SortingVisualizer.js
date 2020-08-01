import React from "react";

import "./SortingVisualizer.css";

import * as selectionSort from "../Algorithms/selectionSort";
import * as bubbleSort from "../Algorithms/bubbleSort";
import * as insertionSort from "../Algorithms/insertionSort";
import * as mergeSort from "../Algorithms/mergeSort";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount = () => {
    this.resetArray();
  };

  // resetArrayFunction from original repo: https://github.com/clementmihailescu/Sorting-Visualizer
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(ramdomIntFromInterval(5, 500));
    }
    this.setState({ array });
  }

  animate = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [bar1Index, bar2Index] = animations[i];
      const bar1Style = arrayBars[bar1Index].style;
      const bar2Style = arrayBars[bar2Index].style;
      if (animations[i][2] !== "s") {
        const color = animations[i][2] === "ci" ? "blue" : "red";
        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const temp = bar2Style.height;
          bar2Style.height = bar1Style.height;
          bar1Style.height = temp;
        }, i * 2);
      }
    }
  };

  selectionSort() {
    const animations = selectionSort.selectionSort(this.state.array);
    this.animate(animations);
  }

  bubbleSort() {
    const animations = bubbleSort.bubbleSort(this.state.array);
    this.animate(animations);
  }

  insertionSort() {
    const animations = insertionSort.insertionSort(this.state.array);
    this.animate(animations);
  }

  mergeSort() {
    const animations = mergeSort.mergeSort(this.state.array);
    this.animate(animations);
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <div className="array-container">
          {array.map((value, index) => (
            <div
              className="array-bar"
              style={{ height: `${value}px` }}
              key={index}
            ></div>
          ))}
        </div>
        <div className="buttons">
          <button onClick={() => this.resetArray()}>Make a New Array</button>
          <button onClick={() => this.selectionSort()}>
            Selection Sort Me!
          </button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort Me!</button>
          <button onClick={() => this.insertionSort()}>
            Insertion Sort Me!
          </button>
          <button onClick={() => this.mergeSort()}>Merge Sort Me!</button>
        </div>
      </div>
    );
  }
}

// resetArrayFunction from original repo: https://github.com/clementmihailescu/Sorting-Visualizer
// even though this was taken off of StackOverflow in his video... so double citations???
function ramdomIntFromInterval(max, min) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
