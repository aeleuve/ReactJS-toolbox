import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const EmpleadoCard = React.createClass({
  render(){
    return(
          <Card style={{ width: '400px', display:'inline-block', margin: '0 10px 0 10px'}}>
            <CardTitle
             avatar={`src/assets/img/${this.props.pic}`}
             title={this.props.name}
             subtitle={this.props.title}
           />

              <CardText>{dummyText}</CardText>
          </Card>
    )
  }
});
export default EmpleadoCard;
