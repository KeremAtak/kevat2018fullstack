import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			selected: 0,
			pisteet: [0, 0, 0, 0, 0, 0]
    }
  }

  render() {
    return (
      <div>
				{this.props.anecdotes[this.state.selected]}
				<Votes arvo = {this.state.pisteet[this.state.selected]} />
				<p>
					<Button onClick={this.aani} teksti = {'vote'} />
       	  <Button onClick={this.seuraava} teksti = {'next anectode'} />
				</p>
				<Bold/>
				{this.props.anecdotes[this.state.pisteet.indexOf(Math.max(...this.state.pisteet))]}
				<Votes arvo = {Math.max(...this.state.pisteet)} />
      </div>
    )
  }

  seuraava = () => {this.setState({selected : satunnaisluku(6)})}
  aani = () => {
		const kopio = this.state.pisteet;
		kopio[this.state.selected] += 1;
		this.setState({selected : satunnaisluku(6)})
	}
}

function satunnaisluku(max) {
	return (
		Math.floor(Math.random() * Math.floor(max))
	)
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Votes = (props) => {
	return (
		<p>has {props.arvo} votes</p>
  )
}

const Bold = (props) => {
	return (
		<h3>anectode with most votes:</h3>
	)
}

const Button = (props) => {
	return (
		<button onClick={props.onClick}>
			{props.teksti}
		</button>
	)
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)