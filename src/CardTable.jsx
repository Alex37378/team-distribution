import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Submit from "./Submit.jsx"

export default function CardTable () {
    return (
        <Card sx={{ maxWidth: 700, margin: 2, boxShadow: 3}}>
            <CardHeader title="Team Points Form" sx={{ textAlign: "center" }} />
            <CardContent>
                <Submit/>
            </CardContent>
        </Card>
    );
}
