import React from 'react';
import '../../Components/Home/AdminPage/AdminPage.css'
import '../../Hooks/AdminPanel'

const AdminPanel = () => {
    return (
        <div>
        <div id="logo">
   <span className="big-logo">.S!mple</span>
   <span className="small-logo">S!M</span>
</div>
<div id="left-menu">
   <ul>
       <li className="active"><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Dashboard</span>
       </a></li>
       <li className="has-sub">
           <a href="#">
               <i className="ion-ios-person-outline"></i>
               <span>UI Elements</span>
           </a>
           <ul>
               <li><a href="#">UI Elements Item 1</a></li>
               <li><a href="#">UI Elements Item 2</a></li>
               <li><a href="#">UI Elements Item 3</a></li>
           </ul>
       </li>
       <li><a href="#">
           <i className="ion-ios-albums-outline"></i>
           <span>Users</span>
       </a></li>
       <li className="has-sub">
           <a href="#">
               <i className="ion-ios-person-outline"></i>
               <span>UI Elements</span>
           </a>
           <ul>
               <li><a href="#">UI Elements Item 1</a></li>
           </ul>
       </li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-albums-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-albums-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-albums-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-albums-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-albums-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-albums-outline"></i>
           <span>Users</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Table</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Grid system</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Permission</span>
       </a></li>
       <li><a href="#">
           <i className="ion-ios-person-outline"></i>
           <span>Users</span>
       </a></li>
       <li className="has-sub">
           <a href="#">
               <i className="ion-ios-person-outline"></i>
               <span>UI Elements</span>
           </a>
           <ul>
               <li><a href="#">UI Elements Item 1</a></li>
               <li><a href="#">UI Elements Item 2</a></li>
               <li><a href="#">UI Elements Item 3</a></li>
           </ul>
       </li>
       <li className="has-sub">
           <a href="#">
               <i className="ion-ios-chatboxes-outline"></i>
               <span>Report</span>
           </a>
           <ul>
               <li><a href="#">Report Item 1</a></li>
               <li><a href="#">Report Item 2</a></li>
               <li><a href="#">Report Item 3</a></li>
               <li><a href="#">Report Item 3</a></li>
               <li><a href="#">Report Item 3</a></li>
               <li><a href="#">Report Item 3</a></li>
               <li><a href="#">Report Item 3</a></li>
           </ul>
       </li>
       <li><a href="#">
           <i className="ion-ios-albums-outline"></i>
           <span>Users</span>
       </a></li>
       <li className="has-sub">
           <a href="#">
               <i className="ion-ios-chatboxes-outline"></i>
               <span>Report</span>
           </a>
           <ul>
               <li><a href="#">Report Item 1</a></li>
               <li><a href="#">Report Item 2</a></li>
               <li><a href="#">Report Item 3</a></li>
               <li><a href="#">Report Item 3</a></li>
               <li><a href="#">Report Item 3</a></li>
               <li><a href="#">Report Item 3</a></li>
               <li><a href="#">Report Item 3</a></li>
           </ul>
       </li>
       <li><a href="#">
           <i className="ion-ios-chatboxes-outline"></i>
           <span>Setting</span>
       </a></li>

   </ul>
</div>
<div id="main-content">
   <div id="header">
       <div className="header-left float-left">
           <i id="toggle-left-menu" className="ion-android-menu"></i>
       </div>
       <div className="header-right float-right">
           <i className="ion-ios-people"></i>
       </div>
   </div>

   <div id="page-container">
       <div className="card">
           <div className="title">Users</div>
           <div className="content">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <input id="html" type="checkbox" className="magic-checkbox"/>
                               <label for="html">HTML</label>

                               <input id="css" type="checkbox" className="magic-checkbox"/>
                               <label for="css">CSS</label>

                               <input id="js" type="checkbox" className="magic-checkbox"/>
                               <label for="js">Javascript</label>
                           </div>
                       </div>

                       <div className="col-sm-6">
                           <div className="form-group">
                               <input name="job" id="designer" type="radio" className="magic-radio"/>
                               <label for="designer">Web designer</label>

                               <input name="job" id="developer" type="radio" className="magic-radio"/>
                               <label for="developer">Web developer</label>

                               <input name="job" id="frontened" type="radio" className="magic-radio"/>
                               <label for="frontened">Frontened</label>
                           </div>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Button</label> <br/>
                               <button className="btn btn-primary">Sumbmit</button>
                               <button className="btn btn-warning">Sumbmit</button>
                               <button className="btn btn-info">Sumbmit</button>
                               <button className="btn btn-danger">Sumbmit</button>
                               <button className="btn btn-secondary">Sumbmit</button>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Languages</label>
                               <select name="" id="" className="form-control">
                                   <option value="">HTML</option>
                                   <option value="">CSS</option>
                                   <option value="">JS</option>
                                   <option value="">PHP</option>
                                   <option value="">SQL</option>
                               </select>
                           </div>
                       </div>
                   </div>


               </div>
           </div>
       </div>
       <div className="card">
           <div className="title">Users</div>
           <div className="content">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="card">
           <div className="title">Users</div>
           <div className="content">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="card">
           <div className="title">Users</div>
           <div className="content">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="card">
           <div className="title">Users</div>
           <div className="content">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="card">
           <div className="title">Users</div>
           <div className="content">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="card">
           <div className="title">Users</div>
           <div className="content">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group">
                               <label for="">Name</label>
                               <input type="text" className="form-control"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div className="card">
           <div className="title">Users</div>
           <div className="content">
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-sm-6">
                           <div className="form-group row">
                               <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
                               <div className="col-sm-9">
                                   <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                               </div>
                           </div>
                           <div className="form-group row">
                               <label for="inputPassword" className="col-sm-3 col-form-label">Password</label>
                               <div className="col-sm-9">
                                   <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                               </div>
                           </div>
                       </div>
                       <div className="col-sm-6">
                           <div className="form-group row">
                               <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
                               <div className="col-sm-9">
                                   <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                               </div>
                           </div>
                           <div className="form-group row">
                               <label for="inputPassword" className="col-sm-3 col-form-label">Password</label>
                               <div className="col-sm-9">
                                   <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>

<span id="show-lable">Hello</span>
   </div>
    );
};

export default AdminPanel;