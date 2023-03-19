import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Link from "next/link";
import {Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";

export default function Likes (effect, deps) {

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => setShow(false);

    // useEffect( () => {
    //     const checkbox = document.querySelectorAll('input[type=checkbox]');
    //     const compareButton = document.querySelector('.combtn');
    //
    //     function updateCompareButton() {
    //         // Array.from 함수는 유사 배열 객체나 반복 가능한 객체를 배열로 변환
    //         // some() 메서드는 배열 요소 중 하나 이상의 조건을 만족하는지 검사
    //         const checked = Array.from(checkbox).some(checkbox => checkbox.checked)
    //         // compareButton.disabled = !checked;
    //         // compareButton.disabled = checked.length < 1
    //         if (checked.length < 1) {
    //             compareButton.disabled = true
    //         } else {
    //             compareButton.disabled = false
    //         }
    //     }
    //
    //     // 체크박스의 변경 이벤트에 함수 연결
    //     checkbox.forEach(checkbox => checkbox.addEventListener('change', updateCompareButton));
    //
    // } )

    // useEffect( () => {
    //     const checkbox = document.querySelectorAll('input[type=checkbox]');
    //     if (checkbox < 1 && onclick) {
    //         alert('1개 이상 선택해야 합니다!');
    //     }
    // } )

    const compare = () => {
        const checkbox = document.querySelectorAll('input[type=checkbox]');
        const checked = Array.from(checkbox).some(checkbox => checkbox.checked)
        if (checked.length < 2) {
            alert('2개 이상 선택해야 합니다!');
        } else {
            setShow(true);
        }
    }

    const go2bk = () => {
        handleClose()
        location.href = '/book';
    };

    return (
        <main>
            <Container fluid>
                <Row className="lnm">
                    <Col className="likesmenu1 col-6">좋아요</Col>
                    <Col className="bar1 col-1">|</Col>
                    <Col className="infomenu1 col-5"><Link href='/myinfo'>내정보</Link></Col>
                </Row>
                <Row>
                    <Col className="temples col-9 offset-1" style={{fontSize: "25px"}}>좋아요를 누른 사찰</Col>
                    <Col>
                        <>
                            <Button variant="primary" className="combtn" onClick={compare}>비교하기</Button>
                            <Modal size="xl" show={show} onHide={handleClose}>
                                <Modal.Header style={{justifyContent: "center", height: "45px", color: "#331904"}}>
                                    <Modal.Title>템플 스테이 비교</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="comtab">
                                    <table style={{textAlign: "center", border: "1px solid #331904"}}>
                                        <tr>
                                            <th>AA사 AAAA</th>
                                            <th>BB사 BBBB</th>
                                            <th>CC사 CCCC</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="3" style={{height: "500px"}}>(지도)</td>
                                        </tr>
                                        <tr style={{height: "40px"}}>
                                            <td>AA형</td>
                                            <td>BB형</td>
                                            <td>CC형</td>
                                        </tr>
                                        <tr style={{height: "40px"}}>
                                            <td>가격 비교 1</td>
                                            <td>가격 비교 2</td>
                                            <td>가격 비교 3</td>
                                        </tr>
                                        <tr style={{height: "400px"}}>
                                            <td>상세정보 비교 1</td>
                                            <td>상세정보 비교 2</td>
                                            <td>상세정보 비교 3</td>
                                        </tr>
                                        <tr className="gobkbtn">
                                            <td style={{border: "1px solid white", paddingTop: "10px"}}><Button onClick={go2bk}>예약하러 가기</Button></td>
                                            <td style={{border: "1px solid white", paddingTop: "10px"}}><Button onClick={go2bk}>예약하러 가기</Button></td>
                                            <td style={{border: "1px solid white", paddingTop: "10px"}}><Button onClick={go2bk}>예약하러 가기</Button></td>
                                        </tr>
                                    </table>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose} style={{backgroundColor: "#331904"}}>
                                        닫기
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </Col>
                </Row>
                <Row className="tpl">
                    <Col className="likeslist col-10 offset-1">
                        <Col className="col-3" style={{display: "flex"}}>
                            <Col className="col-5" style={{display: "flex"}}>
                                <Form.Check type="checkbox" className="checkbox" aria-label="option 1"></Form.Check>
                                <img src="/img/temple.png" width="32" height="32" />
                            </Col>
                            <Col className="col-7">AA사</Col>
                        </Col>
                        <Col className="col-3">AA 주소</Col>
                        <Col className="col-2">AA 날짜</Col>
                        <Col className="col-3">AA 프로그램 이름</Col>
                        <Col className="col-1">1명</Col>
                    </Col>
                </Row>
                <Row className="tpl">
                    <Col className="likeslist col-10 offset-1">
                        <Col className="col-3" style={{display: "flex"}}>
                            <Col className="col-5" style={{display: "flex"}}>
                                <Form.Check type="checkbox" className="checkbox" aria-label="option 2"></Form.Check>
                                <img src="/img/temple.png" width="32" height="32"/>
                            </Col>
                            <Col className="col-7">BB사</Col>
                        </Col>
                        <Col className="col-3">BB 주소</Col>
                        <Col className="col-2">BB 날짜</Col>
                        <Col className="col-3">BB 프로그램 이름</Col>
                        <Col className="col-1">2명</Col>
                    </Col>
                </Row>
                <Row className="tpl">
                    <Col className="likeslist col-10 offset-1">
                        <Col className="col-3" style={{display: "flex"}}>
                            <Col className="col-5" style={{display: "flex"}}>
                                <Form.Check type="checkbox" className="checkbox" aria-label="option 3"></Form.Check>
                                <img src="/img/temple.png" width="32" height="32"/>
                            </Col>
                            <Col className="col-7">CC사</Col>
                        </Col>
                        <Col className="col-3">CC 주소</Col>
                        <Col className="col-2">CC 날짜</Col>
                        <Col className="col-3">CC 프로그램 이름</Col>
                        <Col className="col-1">3명</Col>
                    </Col>
                </Row>
                <Row className="tpl">
                    <Col className="likeslist col-10 offset-1">
                        <Col className="col-3" style={{display: "flex"}}>
                            <Col className="col-5" style={{display: "flex"}}>
                                <Form.Check type="checkbox" className="checkbox" aria-label="option 4"></Form.Check>
                                <img src="/img/temple.png" width="32" height="32"/>
                            </Col>
                            <Col className="col-7">DD사</Col>
                        </Col>
                        <Col className="col-3">DD 주소</Col>
                        <Col className="col-2">DD 날짜</Col>
                        <Col className="col-3">DD 프로그램 이름</Col>
                        <Col className="col-1">4명</Col>
                    </Col>
                </Row>
                <Row className="tpl">
                    <Col className="likeslist col-10 offset-1">
                        <Col className="col-3" style={{display: "flex"}}>
                            <Col className="col-5" style={{display: "flex"}}>
                                <Form.Check type="checkbox" className="checkbox" aria-label="option 5"></Form.Check>
                                <img src="/img/temple.png" width="32" height="32"/>
                            </Col>
                            <Col className="col-7">EE사</Col>
                        </Col>
                        <Col className="col-3">EE 주소</Col>
                        <Col className="col-2">EE 날짜</Col>
                        <Col className="col-3">EE 프로그램 이름</Col>
                        <Col className="col-1">5명</Col>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}