import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { convertDataForML } from '../../services/converter';
import { postRequest } from '../../services/service';
import Button from '@material-ui/core/Button';
import UserContainer from '../userContainer/userContainer';
import Loader from '../loader/loader';

const threshold = 0.75;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    mainContent: {
        display: 'contents',
    }
}));

export default function VacancyAccordion({
    vacancy,
    userList,
}) {
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [finded, setFinded] = useState(false);

    const getUsers = async () => {
        if (finded) {
            return;
        }
        setLoading(true);
        const data = convertDataForML(userList, vacancy, threshold)
        const users = await postRequest('http://localhost:9000/ml/similarity', data)
        setUsers(users);
        setFinded(true);
        setLoading(false);
    }

    return (
        <div className={classes.root} id={vacancy.id}>
            <Accordion style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className={classes.heading}>{vacancy.name}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.mainContent}>
                    <div style={{margin: '0 16px',}}>
                        <Typography>
                            {vacancy.skills}
                        </Typography>
                        <Typography>
                            {vacancy.description}
                        </Typography>
                        {(!finded) && (
                            <Button onClick={getUsers}>
                                Try to find candidates
                            </Button>
                        )}
                    </div>
                    <div style={{ width: '100%', margin: '10px'}}>
                        {(users && finded) && (
                            <UserContainer users={users} searchString={''} active={true} />
                        )}
                        {(finded && !users.length) && (
                            <div>
                                Sorry but we not find any candidates
                            </div>
                        )}
                        {(loading) && (
                            <Loader />
                        )}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
