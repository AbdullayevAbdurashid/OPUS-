import React from 'react';
import CardCont from "./component/card-container/card-container";
import Sidebar from './component/sidebar/sidebar';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Search from "./container/Detail/detail";
import Registeration from "./container/Registration/Register";
import Grouplist from './component/Grouplist/Grouplist';
import TeachersContainer from './component/TeachersPanel/TeachersPanel';
import AddToGroup from './component/addToGroup/AddToGroup';
import ReportsContainer from './component/ReportsPage/ReportsContainer';
import TeachersReg from './container/teachers-reges/teacher-reges';
import Rekvizits from './container/Rekvizits/Rekvizit';
import Adverts from './container/reportsContracts/Advert';
import AdminPanel from './component/AdminPanel/AdminContainer';
import Teachers from './component/Teachers-page/Teachers';
import TeacherFees from "./container/Teacher-fees/teacher-fees";
import GroupJournal from './component/GroupJournal/GroupJournal';
import AddNewEmployee from './container/AddNewEmployee/AddNewEmployee';
import Contracts from './container/reportsContracts/rContracts'
import { StudentProvider, RegisteredProvider } from "./component/Student-datail-context";
import { TempStudentProvider, ChosenStudentProvider } from "./component/Student-datail-context";
import SignInSide from './container/Login/login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUsers } from './actions';
import Axios from 'axios';
import { Private, Public } from './routes';
import { ThemeProvider } from "./component/Student-datail-context";
import Archive from "./component/ReportsInside/Archive/Archive1";
import PageNotFound from "./component/notFound/404";
import ReportsPayment from './component/Reportes-payments/Reports-table';
import Qarzdorlik from './component/ReportsInside/Qarzdorlik';
import Links from './component/links/Link.jsx'
function App() {
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function load() {
    const { data: Users } = await Axios.get('http://localhost:4000/users');
    dispatch(loadUsers(Users));
  }
  const dispatch = useDispatch();
  return (
    <ThemeProvider>
      <StudentProvider>
        <RegisteredProvider>
          
          <div className="App">
         

            <Router>
            <Links link1 = '/' link2 = '/reports'
      text1 = 'Home' text2 = 'Reports ' text3 = 'Reklama' ></Links>
              <Switch>
                <Private exact path="/">
                  <Sidebar component={<CardCont />} />
                </Private>
                <Private exact path="/detail">
                  <TempStudentProvider><Sidebar component={<Search />} /></TempStudentProvider>
                </Private>
                <Private exact path="/register"><Sidebar component={<Registeration />} /></Private>
                <Private exact path="/grouplist"><Sidebar component={<Grouplist />} /></Private>
                <Private exact path="/Teacherscontainer"><Sidebar component={<TeachersContainer />} /></Private>
                <Private exact path="/Teacherscontainer/groupjournal"><Sidebar component={<GroupJournal />} /></Private>
                <Private exact path="/reports/Archive"><Sidebar component={<Archive />} /></Private>
                <Private exact path="/add"><Sidebar component={<ChosenStudentProvider><AddToGroup /></ChosenStudentProvider>} /></Private>
                <Private exact path="/reports"><Sidebar component={<ReportsContainer />} /></Private>
                <Private exact path="/reports/qarzdorlik"><Sidebar component={<Qarzdorlik />} /></Private>
                <Private exact path="/reports/reportpayment"><Sidebar component={<ReportsPayment />} /></Private>
                <Private exact path="/teachersreg"><Sidebar component={<TeachersReg />} /></Private>
                <Private exact path="/rekvizits"><Sidebar component={<Rekvizits />} /></Private>
                <Private exact path="/adminpanel"><Sidebar component={<AdminPanel />} /></Private>
                <Private exact path="/teachers"><Sidebar component={<Teachers />} /></Private>
                <Private exact path="/teachers-fees"><Sidebar component={<TeacherFees />} /></Private>
                <Private exact path="/addnewemployee"><Sidebar component={<AddNewEmployee />} /></Private>
                <Private exact path="/contracts"><Sidebar component={<Contracts />} /></Private>
                <Private exact path="/adverts"><Sidebar component={<Adverts />} />            </Private>
                <Public exact path="/login">
                  <SignInSide />
                </Public>
                <Sidebar component={<PageNotFound />} /><Sidebar />
              </Switch>
            </Router>
          </div>
        </RegisteredProvider>
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;
