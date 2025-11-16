import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Submit from "./Submit.jsx"
import Box from '@mui/material/Box';

//this CardTable component displays a Card
export default function CardTable () {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Card sx={{ width: "100%", maxWidth: 450, margin: 2, boxShadow: 3,  minHeight: 650}}>
                <CardHeader title="Team Points Form" sx={{ textAlign: "center" }} />
                <CardContent>
                    {/*Submit component with all table stuff here*/}
                    <Submit/>
                </CardContent>
            </Card>
        </Box>
    );
}
