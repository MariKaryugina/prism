import React from 'react';
import './index.css';
import VacancyAccordion from '../accordionComponent/accordionComponent';

const vacancyList = [
    {
        id: 1,
        name: 'Go developer',
        description: '',
        skills: 'Go DevOps tools Docker AWS/S3 RedHa SQL NoSQL Redis unit-test',
    },
    {
        id: 2,
        name: 'Python',
        description: '',
        skills: 'Python Git Docker SQL NoSQL React',
    },
];

export default class VacancyContainer extends React.Component {
    getVacancies = () => {
        return vacancyList.map((vacancy, i) => <VacancyAccordion vacancy={vacancy} userList={this.props.userList} key={i}/>)
    }

    render() {
        return (
            <div className={'vacancy-main-container'}>
                {this.getVacancies()}
            </div>
        );
    }
}
