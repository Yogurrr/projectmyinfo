import {Container, Row, Col, NavLink, Button, Modal} from 'react-bootstrap';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { BsCalendar } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import Link from 'next/link';
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/locale";

const Nav = () => {
    const tomorrow = new Date().setDate(new Date().getDate() + 1);

    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(tomorrow);
    const [endDate, setEndDate] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleSubmit = () => {
        setShow(false)
        let std = startDate.getFullYear() + '-' + (startDate.getMonth()+1) + '-' + startDate.getDate();
        let edd = endDate.getFullYear() + '-' + (endDate.getMonth()+1) + '-' + endDate.getDate();
        console.log(`체크인: ${std}, 체크아웃: ${edd}`)
    };
    return (
        <div className='border-bottom border-2 border-primary' id='navWrapper'>
            <Container fluid='xxl'>
                <Row className='title'>
                    <Col md={{ span: 1 }} style={{textAlign: "center"}}>
                        <NavLink href='/'>
                            Temfo,
                        </NavLink>
                    </Col>
                    <Col md={{ span: 5 }} style={{textAlign: "right"}}>
                        <Link href='/region'>
                            <NavLink style={{paddingTop: "0.5%"}}>
                                <HiOutlineMapPin style={{marginTop: "-1.5%"}} />지역
                            </NavLink>
                        </Link>
                    </Col>
                    <Col md={{ span: 5 }} style={{textAlign: "left"}}>
                        <>
                            <Button className="calbtn" onClick={handleShow}>일정<BsCalendar style={{marginTop: "-15%"}} /></Button>
                            <Modal show={show} onHide={handleClose} className="calmod">
                                <Modal.Header style={{justifyContent: "center", height: "45px", color: "#331904"}}>
                                    <Modal.Title>날짜 선택</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="cal">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={onChange}
                                        inline
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={tomorrow}
                                        monthsShown={2}
                                        selectsRange
                                        dateFormat="yyyy-MM-dd"
                                        locale={ko}
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose} style={{backgroundColor: "#331904"}}>
                                        닫기
                                    </Button>
                                    <Button variant="primary" onClick={handleSubmit} className="selbtn">
                                        선택
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </Col>
                    <Col md={{ span: 1 }} style={{textAlign: "center"}}>
                        <NavLink href='/login'>
                            <NavLink>
                                <CiUser />
                            </NavLink>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
            <div className='navBorder'></div>
        </div>
    );
};

export default Nav;