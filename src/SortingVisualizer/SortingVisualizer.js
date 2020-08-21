import React from "react";

import "./SortingVisualizer.css";

import * as selectionSort from "../Algorithms/selectionSort";
import * as bubbleSort from "../Algorithms/bubbleSort";
import * as insertionSort from "../Algorithms/insertionSort";
import * as mergeSort from "../Algorithms/mergeSort";

import { Dropdown } from "semantic-ui-react";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      whichSort: "",
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
    this.setState({ array: array });
  }

  animate = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i][2] === "ci" || animations[i][2] === "co") {
        const [bar1Index, bar2Index] = animations[i];
        const bar1Style = arrayBars[bar1Index].style;
        const bar2Style = arrayBars[bar2Index].style;
        const color = animations[i][2] === "ci" ? "blue" : "red";
        setTimeout(() => {
          bar1Style.backgroundColor = color;
          bar2Style.backgroundColor = color;
        }, i * 2);
      } else if (animations[i][2] === "s") {
        setTimeout(() => {
          const [bar1Index, bar2Index] = animations[i];
          const bar1Style = arrayBars[bar1Index].style;
          const bar2Style = arrayBars[bar2Index].style;
          const temp = bar2Style.height;
          bar2Style.height = bar1Style.height;
          bar1Style.height = temp;
        }, i * 2);
      } else {
        setTimeout(() => {
          const [bar1Index, newHeight] = animations[i];
          const bar1Style = arrayBars[bar1Index].style;
          bar1Style.height = `${newHeight}px`;
        }, i * 2);
      }
    }
  };

  sort() {
    let animations = [];
    switch (this.state.whichSort) {
      case "selection":
        console.log("selection sort");
        animations = selectionSort.selectionSort(this.state.array);
        break;
      case "bubble":
        console.log("bubble sort");
        animations = bubbleSort.bubbleSort(this.state.array);
        break;
      case "insertion":
        console.log("insertion sort");
        animations = insertionSort.insertionSort(this.state.array);
        break;
      case "merge":
        console.log("merge sort");
        animations = mergeSort.mergeSort(this.state.array);
        break;
      default:
        console.log("error");
        break;
    }
    this.animate(animations);
  }

  render() {
    const { array } = this.state;

    const sortingOptions = [
      {
        key: "selection",
        value: "selection",
        text: "Selection Sort",
      },
      {
        key: "bubble",
        value: "bubble",
        text: "Bubble Sort",
      },
      {
        key: "insertion",
        value: "insertion",
        text: "Insertion Sort",
      },
      {
        key: "merge",
        value: "merge",
        text: "Merge Sort",
      },
    ];

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
        <div className="inputContainer">
          <div>
            <Dropdown
              placeholder="Choose Algorithm"
              selection
              options={sortingOptions}
              onChange={(e, data) => this.setState({ whichSort: data.value })}
            />
          </div>
          <div className="buttons">
            <button className="ui button" onClick={() => this.resetArray()}>
              Make a New Array
            </button>
            <button className="ui button" onClick={() => this.sort()}>
              Sort
            </button>
          </div>
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
