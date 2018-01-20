import React, { Component } from 'react';

export default class CarouselItem extends Component {
  state = { active: false };

  componentDidMount() {
    this.setState({
      active: this.props.index === this.props.selectedIndex,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: this.props.index === nextProps.selectedIndex,
    });
  }

  render() {
    return (
      <div className={'carousel-item ' + (this.state.active ? 'active' : '')}>
        <img src={this.props.item.src} alt={this.props.item.alt} />
      </div>
    );
  }
}
