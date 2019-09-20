import React,{Component} from 'react';
import './App.css';
import {Col,Container,Row,FormGroup,Form,Label,Button} from 'reactstrap';
import FormControl from "react-bootstrap/es/FormControl";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

export default class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }
//create a function contactlist with find()

  onSubmit = event =>{
    console.log("hello");
    event.preventDefault();
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const address = this.address.value;
    const city = this.city.value;
    const yourState = this.yourState.value;
    const postcode = this.postcode.value;
    const info ={
      firstName:firstName, lastName:lastName,
      email:email,phone:phone,
      address:address,city:city,
      yourState:yourState,
      postcode:postcode,
      id:this.state.data.length +1,
    };
    const data =[...this.state.data,info ];
    this.setState({
      data:data
    })

  };

  createTasks = item => {
    console.log("hello there");
    return (
        <li
            key={item.id}
            onClick={
              () => this.ShowContact(item.id)
            }
        >
          {item.firstName}
        </li>
    )
  };


  ShowContact = item =>{
    const currentItem = this.state.data.find(dataItem => dataItem.id == item);
    this.firstName.value =currentItem.firstName;
    this.email.value=currentItem.email;
    this.phone.value=currentItem.phone;
    this.address.value=currentItem.address;

    // document.getElementById("yourFirstName").value=currentItem.firstName;
    // console.log(currentItem)
  };

  render() {
    const ContactList = this.state.data.map(this.createTasks);
    return (

        <Container className="App">
          <Row>
            <Col>
              <h2>Contact Form</h2>
              <Form className="form" onSubmit={this.onSubmit}>
                <Col>
                  <FormGroup>
                    <Label>First Name</Label>
                    <FormControl
                        type="text"

                        name="firstName"
                        id="yourFirstName"
                        ref={ input => this.firstName = input}
                        required

                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="Last Name">Last Name</Label>
                    <FormControl
                        type="lastName"
                        name="lastName"
                        id="yourLastName"
                        ref={input => this.lastName = input}
                        required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for ="Email">Email</Label>
                    <FormControl
                        type="email"
                        name="email"
                        id="emailDetails"
                        ref={input => this.email = input}
                        required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="Contact">Contact Number</Label>
                    <FormControl
                        type="contact"
                        name="contact"
                        id="yourContact"
                        ref={input => this.phone = input}
                        required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="Address">Address</Label>
                    <FormControl
                        type="address"
                        name="address"
                        id="yourAddress"
                        ref={input => this.address = input}
                        required
                    />
                  </FormGroup>
                </Col>

                <Row>
                  <Col>
                    <FormGroup>
                      <Label>City</Label>
                      <FormControl
                          type="city"
                          name="city"
                          id="yourCity"
                          ref={input => this.city = input}
                          required
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>State</Label>
                      <FormControl
                          type="state"
                          name = "state"
                          id="yourState"
                          ref={input => this.yourState =input}
                          required
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Postcode</Label>
                      <FormControl
                          type="postcode"
                          name="postcode"
                          id="yourPostCode"
                          ref={input => this.postcode = input}
                          required
                      />
                    </FormGroup>
                  </Col>

                </Row>
                <Button type="submit" className="btn btn-primary" >Submit</Button>
              </Form>
            </Col>
            <Col>
              <h3>Contact Details</h3>
              <hr/>
              <Row>
                <Col>
                  <ul>
                   {ContactList}
                  </ul>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
    )
  }
}

    // find(c=>c.index)

// const Card = item =>
//
//     <Container>
//       <ListGroup>
//         <ListGroupItem id ={item.firstName} key={item.id} onClick={ShowContact}>First Name: {item.firstName}</ListGroupItem>
//
//         {/*<ListGroupItem ><span>Last Name: {props.info.lastName}</span></ListGroupItem>*/}
//         {/*<ListGroupItem ><span>Email: {props.info.email}</span></ListGroupItem>*/}
//         {/*<ListGroupItem ><span>Phone: {props.info.phone}</span></ListGroupItem>*/}
//         {/*<ListGroupItem ><span>Address: {props.info.address}</span></ListGroupItem>*/}
//         {/*<ListGroupItem ><span>City: {props.info.city}</span></ListGroupItem>*/}
//         {/*<ListGroupItem ><span>State: {props.info.yourState}</span></ListGroupItem>*/}
//         {/*<ListGroupItem ><span>Postcode: {props.info.postcode}</span></ListGroupItem>*/}
//       </ListGroup>
//     </Container>;







