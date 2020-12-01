import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import "../Styles/InfoBox.css";

function InfoBoxs( {title, cases, active, isRed, total, ...props}) {
    return (
            <Card 
                onClick={props.onClick} 
                className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
                <CardContent>
                    <Typography className="infoBox-title" color="textSecondary">
                        {title}
                    </Typography>
                    <h2 className={`infoBox-cases ${!isRed && "infoBox-cases--green"}`}>{cases}</h2>
                    <Typography className="infoBox-total" color="textSecondary">
                        {total} total
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default InfoBoxs;
