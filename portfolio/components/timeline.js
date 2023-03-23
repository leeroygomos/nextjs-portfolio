/**
Adapted from https://mui.com/material-ui/react-timeline/
**/

import Timeline from '@mui/lab/Timeline';
import CustomizedTimelineItem from './timelineItem';

export default function CustomizedTimeline(props) {
    return (
        <Timeline position="alternate">
            {props.items.map((item) => 
                    <CustomizedTimelineItem 
                        title={item.title} 
                        date={item.date} 
                        description={item.description}
                        icon={item.icon}
                        color={item.color}>
                    </CustomizedTimelineItem>
            )}
        </Timeline>
    );
}