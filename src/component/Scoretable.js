import './CSS/styles.css'
function Scoretable(){
    let player=[

{
    name:"Dhoni",
    Rank:"1",
    score:"10000"   
},
{
    name:"Sachin",
    Rank:"2",
    score:"9800"  
},
{
    name:"Sehwahg",
    Rank:"3",
    score:"8900" 
},
{
    name:"Subham",
    Rank:"4",
    score:"7400"  
},
{
    name:"Raina",
    Rank:"5",
    score:"7300"  
},
{
    name:"Rahul",
    Rank:"6",
    score:"7000"  
},
{
    name:"Rohit",
    Rank:"7",
    score:"6900"  
},
{
    name:"Bumrah",
    Rank:"8",
    score:"6500"  
}
 ];
 player.sort((a,b)=>{return b.runs-a.runs});
    return(
        <div>
    <div className="TableHead">
       <table>
        <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Score</th>
        </tr>
        <tr>
            <td>{player[0].name}</td>
            <td>{player[0].Rank}</td>
            <td>{player[0].score}</td>
        </tr>
        <tr>
            <td>{player[1].name}</td>
            <td>{player[1].Rank}</td>
            <td>{player[1].score}</td>
        </tr>
        <tr>
            <td>{player[2].name}</td>
            <td>{player[2].Rank}</td>
            <td>{player[2].score}</td>
        </tr>
        <tr>
            <td>{player[3].name}</td>
            <td>{player[3].Rank}</td>
            <td>{player[3].score}</td>
        </tr>
        <tr>
            <td>{player[4].name}</td>
            <td>{player[4].Rank}</td>
            <td>{player[4].score}</td>
        </tr>
        <tr>
            <td>{player[5].name}</td>
            <td>{player[5].Rank}</td>
            <td>{player[5].score}</td>
        </tr>
        <tr>
            <td>{player[6].name}</td>
            <td>{player[6].Rank}</td>
            <td>{player[6].score}</td>
        </tr>
        <tr>
            <td>{player[7].name}</td>
            <td>{player[7].Rank}</td>
            <td>{player[7].score}</td>
        </tr>
       </table>
    </div>
    </div>
    );
}
export default Scoretable;