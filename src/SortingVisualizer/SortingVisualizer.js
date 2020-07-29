import React from 'react'

import './SortingVisualizer.css';

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    };

    componentDidMount= () => {
        this.resetArray();
    }
    
    // resetArrayFunction from original repo: https://github.com/clementmihailescu/Sorting-Visualizer
    resetArray() {
        const array = [];
        for (let i = 0; i < 300; i++) {
            array.push(ramdomIntFromInterval(5, 500));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state

        return(
            <div className="array-container">
                {array.map((value, index) => (
                    <div 
                        className="array-bar"
                        style={{height: `${value}px`}}
                        key={index}
                    >
                    </div>
                )
                )}
            </div>
        );
    };
}

// resetArrayFunction from original repo: https://github.com/clementmihailescu/Sorting-Visualizer
// even though this was taken off of StackOverflow in video
function ramdomIntFromInterval(max, min) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;