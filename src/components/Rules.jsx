import { Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

const Rules = () => {
    return (
        <div>
            <Navbar />
            <div style={{
                margin: '3%',
                color:'#343a40'
            }}>
                <center><Typography variant='h2' >Rules</Typography></center>
                <Typography variant='h5' >Here are the rules for the puzzle:</Typography>
                <Typography variant='h6' >1. The puzzle consists of 10 questions, and each question is worth 1 point.</Typography>
                <Typography variant='h6' >2. The maximum score that can be achieved in the puzzle is 10 points.</Typography>
                <Typography variant='h6' >3. The time to solve the puzzle is limited to 5 minutes. Participants who exceed this time limit will be disqualified.</Typography>
                <Typography variant='h6' >4. Participants may attempt to answer the questions in any order they wish.</Typography>
                <Typography variant='h6' >5. Once a participant has answered a question, they may not go back to change their answer.</Typography>
                <Typography variant='h6' >6. Participants may not use any external resources, such as books, websites, or other people, to assist them in answering the questions.</Typography>
                <Typography variant='h6' >7. The rank of participants will be calculated based on the following criteria:</Typography>
                <div style={{
                    paddingLeft: '20px'
                }}>
                    <Typography variant='h6'>a. The participant with the highest score will be ranked first.</Typography>                    
                    <Typography variant='h6'>b. If multiple participants achieve the same score, the participant who completed the puzzle in the shortest time will be ranked higher.</Typography>                    
                    <Typography variant='h6'>c. If multiple participants achieve the same score and completed the puzzle in the same amount of time, they will be ranked equally.</Typography>                    
                </div>
                <Typography variant='h6' >8. Any attempt to cheat or violate the rules of the puzzle will result in disqualification.</Typography>
                <Typography variant='h6' >9. The organizer of the puzzle reserves the right to make any changes to the rules, as well as to cancel or postpone the puzzle for any reason.</Typography>
            </div>
        </div>
    )
}

export default Rules