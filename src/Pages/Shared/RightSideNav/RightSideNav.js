import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaLinkedin,FaWhatsapp,FaInstagram } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
const RightSideNav = () => {
    return (
        <div>
        <ButtonGroup vertical>
      <Button className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle>  Log In with Google </Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Log In with github
      </Button>
      </ButtonGroup>

      <div className='mt-4'>
       Find us On 
       <ListGroup>
      <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook>  Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaGithub></FaGithub>  Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaGoogle></FaGoogle>  Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaLinkedin></FaLinkedin>  Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp>  Morbi leo risus</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaInstagram></FaInstagram>  Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter>    Vestibulum at eros</ListGroup.Item>
    </ListGroup>
      </div>
          <div className='my-5'>
          <BrandCarousel></BrandCarousel>
          </div>
        </div>
    );
};

export default RightSideNav;