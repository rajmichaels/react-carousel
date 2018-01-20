import React, { Component } from 'react';
import CarouselItem from '../CarouselItem';
import CarouselIndicator from '../CarouselIndicator';

export default class ReactCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.handleNextSliding = this.handleNextSliding.bind(this);
    this.handlePreviousSliding = this.handlePreviousSliding.bind(this);
    this.setSelectedIndex = this.setSelectedIndex.bind(this);
  }

  componentDidMount() {
    this.selectedIndex = setInterval(() => this.setSelectedIndex(), 3000);
  }

  handleNextSliding = e => {
    this.setSelectedIndex(this.state.selectedIndex + 1);
  };

  handlePreviousSliding = e => {
    this.setSelectedIndex(this.state.selectedIndex - 1);
  };

  setSelectedIndex(selectedIndex = this.state.selectedIndex + 1) {
    let optionsLength = this.props.options.length;
    if (selectedIndex === optionsLength) {
      selectedIndex = 0;
    }
    if (selectedIndex === -1) {
      selectedIndex = optionsLength;
    }
    this.setState({
      selectedIndex,
    });
  }

  componentWillUnmount() {
    clearInterval(this.selectedIndex);
  }

  render() {
    return (
      <div className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {this.props.options.map(function(item, index) {
            return (
              <CarouselIndicator
                index={index}
                onClickPreview={this.setSelectedIndex}
                selectedIndex={this.state.selectedIndex}
                key={item.src.toString()}
              />
            );
          }, this)}
        </ol>
        <div className="carousel-inner">
          {this.props.options.map(function(item, index) {
            return (
              <CarouselItem
                item={item}
                index={index}
                selectedIndex={this.state.selectedIndex}
                key={item.src.toString()}
              />
            );
          }, this)}
        </div>
        <a className="carousel-control-prev" onClick={this.handlePreviousSliding} role="button">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" onClick={this.handleNextSliding} role="button">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
