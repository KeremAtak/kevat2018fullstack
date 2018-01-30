import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			otsikko: 'anna palautetta',
			statistiikka: 'statistiikka',
			hyva: 0,
			neutraali: 0,
			huono: 0,
			hyvaNimi: 'hyvä',
			neutraaliNimi: 'neutraali',
			huonoNimi: 'huono',
		}
	}
	render() {
		return (
			<div>
				<Otsikko otsikko={this.state.otsikko} />
				<Button onClick={this.kasitteleVasen} teksti={this.state.hyvaNimi}/>
				<Button onClick={this.kasitteleKeski} teksti={this.state.neutraaliNimi}/>
				<Button onClick={this.kasitteleOikea} teksti={this.state.huonoNimi}/>

				<Statistics state={this.state} />
			</div>

		)
	}

	kasitteleVasen = () => {this.setState({hyva: this.state.hyva + 1})}	
	kasitteleKeski = () => {this.setState({neutraali: this.state.neutraali + 1})}
	kasitteleOikea = () => {this.setState({huono: this.state.huono + 1})}
}

const Button = (props) => {
	return (
		<button onClick={props.onClick}>
			{props.teksti}
		</button>
	)
}

const Statistic = (props) => {
	return (
		<tr>
			<td>{props.nimi}</td>
			<td>{Desimaali.muunna(props.arvo, props.pyoristaja)*props.kertoja}{props.paate} </td>
		</tr>
	)
}

const Statistics = (props) => {
	if (props.state.hyva === 0 && props.state.neutraali === 0 && props.state.huono === 0) {
		return (
			<div>
				<Otsikko otsikko='statistiikka' />
				<p>ei yhtään palautetta annettu</p>
			</div>
		)
	}
	return (
		<div>
			<Otsikko otsikko='statistiikka' />
			<table>
				<tbody>
					<Statistic nimi={props.state.hyvaNimi} arvo={props.state.hyva} pyoristaja = {1} kertoja = {1} paate = '' />
					<Statistic nimi={props.state.neutraaliNimi} arvo={props.state.neutraali} pyoristaja = {1} kertoja = {1} paate = '' />
					<Statistic nimi={props.state.huonoNimi} arvo={props.state.huono} pyoristaja = {1} kertoja = {1} paate = ''/>
					<Statistic nimi={'keskiarvo'} arvo={props.state.hyva / (props.state.hyva + props.state.neutraali + props.state.huono)} pyoristaja = {1} kertoja = {1} paate = ''/>
					<Statistic nimi={'positiivisia'} arvo={(props.state.hyva + props.state.neutraali) / (props.state.hyva + props.state.neutraali + props.state.huono)} pyoristaja = {3}
					kertoja = {100} paate = ' %'/>
				</tbody>
			</table>
		</div>
	)
}

const Desimaali = {
  muunna: function(numero, tarkkuus) {
		var nimittaja = Math.pow(10, tarkkuus),
		palautus = Math.round(numero * nimittaja) / nimittaja;
		return palautus;
	}
}


const Otsikko = (props) => {
  return (
		<h2>{props.otsikko}</h2>
  )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)