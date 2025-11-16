import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Submit from "./Submit.jsx"
import Box from '@mui/material/Box';

export default function CardTable () {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Card sx={{ width: "100%", maxWidth: 450, margin: 2, boxShadow: 3}}>
                <CardHeader title="Team Points Form" sx={{ textAlign: "center" }} />
                <CardContent>
                    <Submit/>
                </CardContent>
            </Card>
        </Box>
    );
}
