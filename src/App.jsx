
import './App.css';
import {Row,Container,Col} from 'react-bootstrap';
import IMAGES from './assets/img/images';
import { Fragment } from 'react';
import CustomFooter from './component/footer';

function App() {
  return (
    <Fragment>
    <Container fluid as={"section"} className="sec">
      <Row className='m-0 mb-5'>
        <Col lg={6} sm={9} md={6} className="first-col px-0">
          <img src={IMAGES.first_pic} alt="first section" className='firstpic'/>
        </Col>
        <Col lg={6} sm={3} md={6}>
        </Col>
      </Row>
      <Row className="mt-6 mx-7 ms-lg-5 me-0">
        <Col lg={2} md={2} sm={12} className={"mt-sm-5"}>
          <h1 className='orange fw-700 ms-lg-5 fs-sm-5'>01</h1>
        </Col>
        <Col lg={10} md={10} sm={12} className="mt-sm-5 ps-5">
          <h1 className='black'>About Our Studio</h1>
          <p>Image From <a href='https:moyo.com' className='my-link'>Freepik</a></p>
        </Col>

      </Row>
      <Row  className="mx-7 mt-5 pb-3 w-80 ms-lg-5 me-0">
       
        <Col lg={6} sm={12} md={6}>
          <p className='ms-lg-5 ms-4 par2 fw-400'>We are the custom web design company in USA that offers inspiring web design services with soothing colors, awesome visuals, a user-friendly layout, comfortable and pleasant user experience that will elongate users' stay while encouraging them for repeated visits.</p>
        </Col>
        <Col lg={6} sm={12} md={6} className="mb-5">
          <div className="round fs-5 my-xs-5 mx-xs-4 lh-lg bg-white w-90 me-4 w-md-100 w-sm-100 py-3 px-4">
          <p className=''><span className='fw-700'>01.</span> Web Design<br  />
              <span className='fw-700'>02. </span>Development <br  />
              <span className='fw-700'>03. </span>Consultancy <br  />
              <span className='fw-700'>04. </span>Fatest Hosting <br  />
              <span className='fw-700'>05. </span>Duis aute irure <br  />
              <span className='fw-700'>06. </span>Ut enim ​deserunt mollit <br  />
          </p>
          </div>
          
        </Col>
        
      </Row>
    </Container>
    <Container fluid as={"section"} className="px-0 bg-dark sec2">
      <CustomFooter footerClass={''}>
        
      </CustomFooter>
    </Container>
    </Fragment>
    
  );
}

export default App;
