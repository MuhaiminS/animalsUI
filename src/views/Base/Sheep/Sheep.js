
import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import{Snackbar,SnackbarContent}from '@material-ui/core/';


export default class Sheep extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      newadded:[], 
      updatedata:[], 
      alert:'',
      data:[],
      columns: [
        { title: 'Enterprise Name', field: 'enterprise_name' },
        { title: 'Animal Class', field: 'animal_class' },
        { title: 'Opening Value', field: 'opening_value', type: 'numeric' },
        { title: 'Birth', field: 'birth', type: 'numeric' },
        { title: 'Purchase', field: 'purchase', type: 'numeric' },
        { title: 'Sales', field: 'sales', type: 'numeric' },
        { title: 'Transfer In', field: 'transfer_in', type: 'numeric' },
        { title: 'Transfer Out', field: 'transfer_out', type: 'numeric' },
        { title: 'Deaths / Rations', field: 'deaths_rations', type: 'numeric' },
        { title: 'Closing', field: 'closing', type: 'numeric' },
      ],
    }
  }
/**
 * @Task : Get All Data From Table
 * @returns : listeed data
 */
  componentDidMount(){
    let url = "http://localhost/animals-api/api/animals";
    let header ={    
        'Access-Control-Allow-Origin': 'http://localhost' 
    };
    let Items = [];
    let responseData =  axios.get(url,header);
        responseData.then(response => {
        switch(response.status){
            case 200:
                response.data.forEach(obj => {
                      Items.push({
                        "enterprise_name":obj.enterprise_name,
                        "animal_class":obj.animal_class,
                        "opening_value":obj.opening_value,
                        "birth":obj.birth,
                        "purchase":obj.purchase,
                        "sales":obj.sales,
                        "transfer_in":obj.transfer_in,
                        "transfer_out":obj.transfer_out,
                        "deaths_rations":obj.deaths_rations,
                        "closing":obj.closing,
                  })
                });
                this.setState({data:Items});
            break;
            default:
            break;
        }            
    }).catch(error => {    
      switch(error.response && error.response.status){
          case 400:
          break;
            default:
          break;
      }   
  });
}
closeAlert = ()=> {
  this.setState({
    alert:false,
  });
}
/**
 * @Task : Add New Record to table
 * @returns : response message from api
 */
addNewAnimals(){
  let url = "http://localhost/animals-api/api/animals";
  let header ={    
      'Accept':'application/json,text/plain',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'POST',
  };
  const getAlert = (message) => (
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={alert} autoHideDuration={6000} onClose={this.closeAlert}>
          <SnackbarContent
          className="mb-3 bg-success"
          message={message}
          />
      </Snackbar>
  );
  const getError = (message) => (
    <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={alert} autoHideDuration={6000} onClose={this.closeAlert}>
        <SnackbarContent
        className="mb-3 bg-danger"
        message={message}
        />
  </Snackbar>
  );
  if(this.state.newadded.enterprise_name === null || this.state.newadded.enterprise_name === ""){
       this.setState({alert: getError("Enterprise Name Can't Empty")})
  } else if(this.state.newadded.animal_class === '' || this.state.newadded.animal_class === ""){
      this.setState({alert: getError("Animal Class Can't Empty")})
  }else{
      let data ={};
      data = {
        "action":"add",
          "enterprise_name":this.state.newadded.enterprise_name,
          "animal_class":this.state.newadded.animal_class,
          "opening_value":this.state.newadded.opening_value,
          "birth":this.state.newadded.birth,
          "purchase":this.state.newadded.purchase,
          "sales":this.state.newadded.sales,
          "transfer_in":this.state.newadded.transfer_in,
          "transfer_out":this.state.newadded.transfer_out,
          "deaths_rations":this.state.newadded.deaths_rations,
          "closing":this.state.newadded.closing,
      };

      let responseData =  axios.post(url,data,header);
          responseData.then(response => {
              switch(response.status){
                  case 200:
                    this.setState({alert: getAlert(response.data)})
                  break;
                  case 403:
                  case 404:
                    this.setState({alert: getError(response.data)})
                  break;
                  default:
                  break;
              }            
          }).catch(error => {    
            switch(error.response.status){
                           case 403:
                             case 404:  
                                this.setState({
                                    alert: getError(error.response.data),
                                });
                         break;
                  default:
                break;
            }   
        }); 
}
}
/**
 * @Task : Update Record to table
 * @returns : response message from api
 */
updateNewAnimals(){
  let url = "http://localhost/animals-api/api/animals";
  let header ={    
      'Accept':'application/json,text/plain',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'POST',
  };
  const getAlert = (message) => (
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={alert} autoHideDuration={6000} onClose={this.closeAlert}>
          <SnackbarContent
          className="mb-3 bg-success"
          message={message}
          />
      </Snackbar>
  );
  const getError = (message) => (
    <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={alert} autoHideDuration={6000} onClose={this.closeAlert}>
        <SnackbarContent
        className="mb-3 bg-danger"
        message={message}
        />
  </Snackbar>
  );
  console.log(this.state.updatedata);
  if(this.state.updatedata.enterprise_name === null || this.state.updatedata.enterprise_name === ""){
       this.setState({alert: getError("Enterprise Name Can't Empty")})
  } else if(this.state.updatedata.animal_class === '' || this.state.updatedata.animal_class === ""){
      this.setState({alert: getError("Animal Class Can't Empty")})
  }else{
      let data ={};
      data = {
          "action":"update",
          "enterprise_name":this.state.updatedata.enterprise_name,
          "animal_class":this.state.updatedata.animal_class,
          "opening_value":this.state.updatedata.opening_value,
          "birth":this.state.updatedata.birth,
          "purchase":this.state.updatedata.purchase,
          "sales":this.state.updatedata.sales,
          "transfer_in":this.state.updatedata.transfer_in,
          "transfer_out":this.state.updatedata.transfer_out,
          "deaths_rations":this.state.updatedata.deaths_rations,
          "closing":this.state.updatedata.closing,
      };

      let responseData =  axios.post(url,data,header);
          responseData.then(response => {
              console.log(response);
              switch(response.status){
                  case 200:
                    this.setState({alert: getAlert(response.data)})
                  break;
                  case 403:
                  case 404:
                    this.setState({alert: getError(response.data)})
                  break;
                  default:
                  break;
              }            
          }).catch(error => {    
            switch(error.response.status){
                           case 403:
                             case 404:  
                                this.setState({
                                    alert: getError(error.response.data),
                                });
                         break;
                  default:
                break;
            }   
        }); 
}
}
render(){
  return (
    <div>
       {this.state.alert}
        <MaterialTable
          title="Enter your animal classes for each enterprise in a logical order. Read more"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState({newadded:newData});
                  this.addNewAnimals();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data};
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState({updatedata:newData});
                  this.updateNewAnimals();
                  if (oldData) {
                    this.setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
     </div>
  );
  }
}