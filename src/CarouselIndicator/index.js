import React, { Component } from 'react';

export default class CarouselIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.showPreview = this.showPreview.bind(this);
  }

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

  showPreview = e => {
    this.props.onClickPreview(this.props.index);
  };

  render() {
    return (
      <li
        className={'cursor-pointer' + (this.state.active ? 'active' : '')}
        onClick={this.showPreview}
      />
    );
  }
}

CarouselIndicator.defaultProps = {
  onClickPreview: () => {},
};
