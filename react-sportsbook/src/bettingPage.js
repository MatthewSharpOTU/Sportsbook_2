// import logo from './logo.svg';
// import './App.css';
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { useNavigate, useParams} from 'react-router-dom';

// export default function Betting() {
//     const {person} = useParams();
//     console.log(person);

//     const mattStat = [261.5, 2.5, 26.5, 17.5, 2.5, 1.5, 55.5, 13.5, 1.5, 44.5, 3.5, 83.5, 5.5, 35.5, 3.5, 28.5, 2.5, 38.5, 2.5]
//     const branStat = [344.5, 3.5, 30.5, 20.5, 2.5, 2.5, 20.5, 2.5, 0.5, 110.5, 5.5, 87.5, 3.5, 67.5, 3.5, 10.5, 1.5, 5.5, 1.5]
//     const mattTD = ["HB", "WR1", "QB", "TE", "WR2", "WR3", "DEF"]
//     const brandonTD = ["TE", "WR1", "WR2", "HB", "QB", "WR3", "DEF"]

//     let odds = 0

//     let stats = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//     let touchdowns = ["","","","","","",""]

//     if (person === "Matthew"){
//         stats = mattStat
//         touchdowns = mattTD
//     }
//     else{
//         stats = branStat
//         touchdowns = brandonTD
//     }
//     console.log(stats)


//     return (
//         <h1>Hi World</h1>
//     );
// }

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, Button, TextField } from '@mui/material';

export default function Betting() {
    const { person } = useParams();

    const statName = ["QB Passing Yards", "QB Passing TDs", "Passing Attempts", "Completed Passes", "Thrown Interceptions", "Sacks",
        "HB Rushing Yards", "HB Rushing Attempts", "HB TDs", "TE Receiving Yards", "TE Receptions", "WR1 Receiving Yards", "WR1 Receptions",
        "WR2 Receiving Yards", "WR2 Receptions", "HB Receiving Yards", "HB Receptions", "WR3 Receiving Yards", "WR3 Receptions"
    ];

    const mattStat = [261.5, 2.5, 26.5, 17.5, 2.5, 1.5, 60.5, 13.5, 1.5, 44.5, 3.5, 83.5, 5.5, 35.5, 3.5, 28.5, 2.5, 38.5, 2.5];
    const branStat = [344.5, 3.5, 30.5, 20.5, 2.5, 2.5, 20.5, 2.5, 1.5, 110.5, 5.5, 87.5, 3.5, 67.5, 3.5, 10.5, 1.5, 13.5, 1.5];

    // Assigning odds multipliers for each bet
    const oddsOverMultipliersMatt = [-150, -110, -110, -110, +170, -110, -180, -110, -185, +120, -110, -150, -110, +120, -110, -110, +180, +110, +230];
    const oddsUnderMultipliersMatt = [+120, -130, -110, -110, -200, -110, +215, -110, +140, -130, -110, +140, -110, -170, -115, -110, -210, -120, -250];
    const oddsOverMultipliersBrandon = [-200, -140, +115, +110, -110, +140, -110, +330, -155, -110, -170, -140, +110, -120, +120, +150, +130, -180, -110];
    const oddsUnderMultipliersBrandon = [+160, +120, -150, -130, -110, -210, -110, -400, +120, -130, +140, +110, -110, -105, -130, -175, -150, +120, -110];
    
    const mattTD = ["HB", "WR1", "QB", "TE", "WR2", "WR3", "DEF"];
    const brandonTD = ["TE", "WR1", "WR2", "HB", "QB", "WR3", "DEF"];

    // Assigning odds multipliers for each bet
    const tdOddsMultipliersMatt = [-250, -150, +100, +150, +210, +350, +750];
    const tdOddsMultipliersBrandon = [-220, -170, -110, +130, +180, +300, +750];

    let stats = person === "Matthew" ? mattStat : branStat;
    let overs = person === "Matthew" ? oddsOverMultipliersMatt : oddsOverMultipliersBrandon;
    let unders = person === "Matthew" ? oddsUnderMultipliersMatt : oddsUnderMultipliersBrandon;
    let touchdowns = person === "Matthew" ? mattTD : brandonTD;
    let tdOdds = person === "Matthew" ? tdOddsMultipliersMatt : tdOddsMultipliersBrandon;

    const [selectedOdds, setSelectedOdds] = useState([]);
    const [wager, setWager] = useState("");

    // Add odds to selected list when a bet is placed
    const handleBet = (odds) => {
        console.log(payout)
        setSelectedOdds([...selectedOdds, parseFloat(odds)]);
    };

    // Calculate total odds (product of all selected odds)
    const totalOdds = selectedOdds.reduce((acc, odd) => acc * odd, 1).toFixed(2);

    // Calculate payout (wager * total odds)
    const payout = wager ? (parseFloat(wager) * totalOdds).toFixed(2) : "0.00";

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                {person}'s Betting Odds
            </Typography>

            {/* Over/Under Section */}
            <Typography variant="h5" gutterBottom>
                Over/Under Bets
            </Typography>
            <Grid container spacing={2}>
                {stats.map((stat, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                        <Card sx={{ textAlign: "center", p: 2 }}>
                            <CardContent>
                                <Typography variant="h6">{statName[index]}</Typography>
                                <Typography variant="h5">{stat}</Typography>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    sx={{ mt: 1 }} 
                                    //onClick={() => handleBet(oddsMultipliers[index])}
                                >
                                    Over: {overs[index]}
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    sx={{ mt: 1, ml: 1 }} 
                                    //onClick={() => handleBet(oddsMultipliers[index])}
                                >
                                    Under: {unders[index]}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Anytime Touchdown Section */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Anytime Touchdown Scorer
            </Typography>
            <Grid container spacing={2}>
                {touchdowns.map((player, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <Card sx={{ textAlign: "center", p: 2 }}>
                            <CardContent>
                                <Typography variant="h6">{player}</Typography>
                                <Button variant="contained" color="success" sx={{ mt: 1 }}>{tdOdds[index]}</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
