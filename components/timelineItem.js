import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';

export default function customizedTimelineItem({title, date, description, icon, color}){
    return(
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="white"
                >
                {date}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color={color}>
                {icon == "school" ? <SchoolIcon fontSize='large'/> : <LaptopMacIcon fontSize='large'/>}
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '35px', px: 2 }}>
                <Typography variant="h5" color="white">
                    {title}
                </Typography>
                <Typography variant="body1">
                    {description}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}