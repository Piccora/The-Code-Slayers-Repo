import { CardDefault } from '../../components/ui/CardDefault';
import { Typography } from '@material-tailwind/react';
import './OptionCreate.css';

export function OptionCreate() {
    return (
        <div className='option-create-body'>
            <Typography variant="h3" className='option-create-title'>What do you want to create today?</Typography>
            <div className='option-create'>
                <CardDefault title="Courses" content="Click here to create courses" />
                <CardDefault title="Events" content="Click here to create events" />
            </div>
        </div>
    )
}

export default OptionCreate;