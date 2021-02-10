import React from 'react';
import './index.css';
import Header from '../header/header';
import UserContainer from '../userContainer/userContainer';
import VacancyContainer from '../vacancyContainer/vacancyContainer';

const users = [
  { fullname: 'Виктор Мурашов', location: '511 - Bootcamp', id: 1, in: true, imgUrl: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg', skills: 'Redis C JavaScript Jenkins Git Mercurial' },
  { fullname: 'Рогов Илья', location: '503 - Dream team', id: 2, in: true, skills: 'TypeScript Python NoSQL Java KVM C Redis MSSQL Hudson' },
  { fullname: 'Мария Карюгина', location: '67 - Home work', id: 3, in: false, skills: 'Mercurial C SVN Redis KVM Python' },
  { fullname: 'Виктор Мурашов', location: '67 - Home work', id: 4, in: false, skills: 'Redis SVN Mercurial JavaScript C NoSQL'  },
  { fullname: 'Павлова Ксения', location: '511 - Bootcamp', id: 5, in: true, skills: 'Redis C# MSSQL RedHa Java PostgreSQL' },
  { fullname: 'Петрова Валерия', location: '503 - Dream team', id: 6, in: true, skills: 'Bash MSSQL PostgreSQL Go Mercurial Docker Python JavaScript Hudson '},
  { fullname: 'Мария Карюгина 2', location: '67 - Home work', id: 7, in: false, skills: 'Jenkins RedHa Mercurial Java Bash '},
  { fullname: 'Виктор Мурашов 2', location: '67 - Home work', id: 8, in: false, skills: 'Hudson Hyper-V Git MSSQL TypeScript'},
  { fullname: 'Завьялова Анастасия ', location: '102 - Home work', id: 9, in: false, skills: 'RedHa JavaScript PostgreSQL Gitlab C# Hudson '},
  { fullname: 'Смирнова Ольга', location: '102 - Home work', id: 10, in: false, skills: 'Go PostgreSQL Bash Hyper-V VirtualBox Java SVN'},
  { fullname: 'Константинов Евгений', location: '67 - Home work', id: 11, in: true, skills: 'Git Python Hudson SVN KVM SQL NoSQL MySQL'  }, 
  { fullname: 'Кузнецов Виктор', location: '100 - Home work', id: 12, in: false, skills: 'VirtualBox PostgreSQL MSSQL Java SVN' },
  { fullname: 'Ломов Александр', location: '67 - Home work', id: 13, in: false,  skills: 'NoSQL Gitlab JavaScript MSSQL Mercurial'},
  { fullname: 'Виктор Мурашов 2', location: '67 - Home work', id: 14, in: false, skills: 'NoSQL Python Docker KVM C# MSSQL Mercurial' },
  { fullname: 'Плюшкин Николай', location: '67 - Home work', id: 15, in: false, skills: 'Hudson TypeScript Hyper-V' },
  { fullname: 'Зайцев Игорь', location: '102 - Home work', id: 16, in: false, skills: 'Jenkins Java Go Redis Mercurial Gitlab'},
  { fullname: 'Носова Алена', location: '503 - Home work', id: 17, in: false, skills: 'NoSQL VirtualBox MySQL TypeScript Jenkins Hudson Go JavaScript Mercurial'},
  { fullname: 'Рогов Иван', location: '102 - Home work', id: 18, in: false, skills: 'Mercurial KVM Git SQL Gitlab'},
]; 

export default class MainContainer extends React.Component {
  state = {
    active: false,
    vacanciesOpen: false,
    searchString: '',
  };

  onChangeActive = () => {
    this.setState({ active: !this.state.active });
  };

  onChangeSearchString = (e) => {
    this.setState({ searchString: e.target.value });
  };

  onChangeVacanciesVisible = () => {
    this.setState({ vacanciesOpen: !this.state.vacanciesOpen });
  };

  render() {
    return (
      <div className={'main-container'}>
        <Header
          active={this.state.active}
          vacanciesOpen={this.state.vacanciesOpen}
          changeVacanciesVisible={this.onChangeVacanciesVisible}
          changeActive={this.onChangeActive}
          changeSearchString={this.onChangeSearchString}
        />
        {(this.state.vacanciesOpen && (
          <VacancyContainer userList={users}/>
        )) || (
            <UserContainer
              users={users}
              active={this.state.active}
              searchString={this.state.searchString}
            />
          )}
      </div>
    );
  }
}
