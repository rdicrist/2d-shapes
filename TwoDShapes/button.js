import React from 'react';
import {
  StyleSheet,
  Text,
  VrButton,
} from 'react-vr';

export default class Button extends React.Component {
  constructor() {
    super();
    this.styles = StyleSheet.create({
	  button: {
		margin: 0.05,
        height: 0.3,
        width: 0.8,
        backgroundColor: 'red',
	  },
	  text: {
		fontSize: 0.2,
		textAlign: 'center',
	  },
	});
  }

  render() {
    return (
      <VrButton style={this.styles.button}
        onClick={() => this.props.callback()}>
        <Text style={this.styles.text}>
          {this.props.text}
        </Text>
      </VrButton>
    );
  }
}
