import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import './Nav.css';
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Nav = () => {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/*<script>
                $(function () {
                $('#datePicker').datepicker({
                    format: 'yyyy-mm-dd', startDate: '-10d', endDate: '+10d', autoClose: true, calendarWeeks: false, clearBtn: false, multidate: false,
                    templates: { leftArrow: '&laquo;', rightArrow: '&raquo;' }, showWeekDays: true, title: '시작 날짜', language: 'ko'
                }).on("changeDate", function(e) {
                    console.log(e);
                } )
            })
            </script>*/}
            <Container fluid>
                <Row className="title">
                    <Col className="col-2"><Link href='/'>Temfo,</Link></Col>
                    <Col className="col-4" style={{textAlign: "right"}}><Link href='/'><i className="bi bi-geo-alt"></i>지역</Link></Col>
                    <Col className="col-3" style={{textAlign: "left"}}><i className="bi bi-calendar"></i>
                        <Button className="calbtn" onClick={handleShow}>일정</Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>날짜 선택</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="cal">
                                <input type="text" id="datePicker1" className="form-control" placeholder="시작 날짜"  />
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    startDate={new Date()}
                                    endDate={new Date().setDate(new Date().getDate() + 10)}
                                    title="시작 날짜"
                                    language="ko"
                                />
                                <input type="text" id="datePicker2" className="form-control" placeholder="끝 날짜"  />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    닫기
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    선택
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col className="col-3" style={{textAlign: "right"}}><Link href='/'><i className="bi bi-person"></i></Link></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Nav;