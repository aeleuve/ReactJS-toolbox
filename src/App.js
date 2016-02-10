import React from 'react';
import EmpleadoCard from './empleado-card';

const App = React.createClass ({
    render(){
      return (
        <div className="cards-list">
            {
                this.props.listado.map((item) => {
                  return <EmpleadoCard key={item.id}
                                       name={ item.fullName }
                                       depart={ item.department }
                                       title={item.title}
                                       pic={item.pic} />
                })
            }
        </div>
      )
    }
});
export default App;
