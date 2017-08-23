import React, { Component } from 'react';
import { Text, View, Image, Animated } from 'react-native';
import styles from './styles/GameStartStyle';
import ClickableImage from '../components/ClickableImage';
import clickableStyles from '../components/styles/ClickableImageStyle'
import { StackNagivator } from 'react-navigation';
import FadeInView from '../animations/FadeInView';
import Svg, { Line } from 'react-native-svg';
import * as Animatable from 'react-native-animatable';

// class VerticalLine extends Component {
//     render() {
//         return (
//         	<Svg
// 				    height="100"
// 				    width="100"
// 					>
// 				    <Line
// 			        x1="0"
// 			        y1="0"
// 			        x2="100"
// 			        y2="100"
// 			        stroke="red"
// 			        strokeWidth="2"
// 				    />
// 				</Svg>
// 				);
//     }
// }

export default class GameStart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
		}
	}

	componentDidMount() {
		return fetch('http://localhost:3000/games', {
			method: 'POST',
			headers: {
				'Accept': 'applicaton/json',
				'Content-Type': 'application/json',
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				actors: responseJson,
			})
		})
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View>
					<Text>Loading...</Text>
				</View>
			)
		}

		const { navigate } = this.props.navigation;
		return (
			<View style={styles.viewFlex}>
				<Text style={styles.top_path_text}> - STARTING WITH -</Text>
				<View>
					<Text style={styles.start_name} >{this.state.actors.starting_actor.name}</Text>
				</View>
				<FadeInView>
					<View style={styles.startingView}>
					<Animatable.Image animation="pulse" easing="ease-out" duractoin="5000" iterationCount="infinite" style={styles.pulse_image}>
						<ClickableImage text={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.actors.starting_actor.image_url}} imageStyle={clickableStyles.startImage} touchStyle={clickableStyles.startTouchable} onPress={() => navigate('GameplayScreen', { game_id: this.state.actors.game_id, traceable_id: this.state.actors.starting_actor.id, traceable_type: 'Actor'} )} />
						</Animatable.Image>
					</View>
				</FadeInView>
					<Text style={styles.mid_path_text}> - FIND A PATH TO -</Text>
				<FadeInView>
					<View style={styles.endingView}>
						<Image source={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.actors.ending_actor.image_url}} style={styles.image}/>
					</View>
				</FadeInView>
					<View>
						<Text style={styles.end_name} >{this.state.actors.ending_actor.name}</Text>
					</View>
			</View>
		);
	}
}

<Text style={styles.path_text}> - FIND A PATH TO -</Text>
