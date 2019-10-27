import React,{Component} from "react"


export default class CurrentDate extends Component{
    
    constructor(){
        super()
        
        this.state={
            day:"",
            month:"",
            year:"",
            date:"",
      }
    }

    componentWillMount() {
        setInterval(this.currentDate)
      }

    currentDate =()=> {
        let d = new Date()
        this.setState({
          day: d.getDay(),
          month: d.getMonth(),
          year: d.getFullYear(),
          date: d.getDate(),
        })
      }

    render(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

      return(
        <div className="currentDate">
            <h1>{this.state.date} {months[this.state.month]} , {this.state.year},{days[this.state.day]}</h1>
        </div>
      )
    }
}