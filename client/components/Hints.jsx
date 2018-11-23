import React from 'react'

// export class Hints extends Component {
//   constructor(props) {
//   super(props) 
//     this.state = {
//       hints: ['hint1', 'hint2', 'this is hint 3', 'this is hint 4',],
//       hint:'',
//       counter: 1,
//       answer: ""
//     }
//     // this.clickHandler = this.clickHandler.bind(this)
//     // this.showHints = this.showHints.bind(this)
//     // this.changeHandler = this.changeHandler.bind(this)
//   }

  //   showHints () {
  //   this.setState({hint: this.state.hints[this.state.counter], 
  //   counter: this.state.counter +1})
  //   if (this.state.counter >= this.state.hints.length) {
  //     //somethign
  //   }
  // }
  //   clickHandler () {
  //   this.setState({hint:this.state.hints[0]})
  //   let timer = setInterval(this.showHints, 3000)
  //   }

  //   changeHandler (e) {
  //     this.setState({answer: e.target.value})
  //   }

  const Hints = (props) => {
    console.log(props)
    return (
      <div>
      <button className='btn waves-effect waves-light' onClick={props.clickHandler}>
      Start hints
      </button>
      <div className='hint'><h3>{props.hint}</h3></div>
      <input className='deep-orange-text text-darken-4' type="text" onChange={props.changeHandler} placeholder="Enter the answer" value={props.answer} />
      
      </div>
    )
  }

export default Hints
