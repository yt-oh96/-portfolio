import React from 'react'
import ReactDOM from 'react-dom'

class MyTimeLine extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const data = [
            {
              title: 'Wake up',
              description: 'Remember tooth brushing and read notes on the tablet',
              time: new Date("March 6, 2018 6:15:00"),
            },
            {
              title: 'Eatting',
              description: 'Eat breakfast: bread and drink milk',
              time: new Date("March 6, 2018 7:00:00"),
            },
            {
              title: 'Working',
              description: 'Go to ABX Company and working react-native',
              time: new Date("March 6, 2018 7:35:00"),
            },
            {
              title: 'Relax',
              description: 'Listen to music "Hello Vietnam" song',
              time: new Date("March 6, 2018 14:15:00"),
            },
          ]
        return (
            <TimeLine
            data={data}
            isRenderSeperator
            columnFormat={'two-column'}
            />
        )
    }
}
  


ReactDOM.render(<MyTimeLine />, document.getElementById('root'))