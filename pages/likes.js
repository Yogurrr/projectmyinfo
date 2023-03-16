import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import {Button, Form} from "react-bootstrap";

export default function Likes () {
    const showChkbx = () => {
        //
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
                    <Col><Button variant="primary" className="combtn" onClick={showChkbx}>비교하기</Button></Col>
                </Row>
                <Row className="tpl">
                    <Col className="likeslist col-10 offset-1">
                        <Col className="col-1">
                            <Form.Check aria-label="option 1"></Form.Check>
                        </Col>
                        <Col className="col-1">(이미지)</Col>
                        <Col className="col-1">XX사</Col>
                        <Col className="col-2">주소</Col>
                        <Col className="col-2">날짜</Col>
                        <Col className="col-3">프로그램 이름</Col>
                        <Col className="col-1">인원 수</Col>
                    </Col>
                </Row>
                <Row className="tpl">
                    <Col className="likeslist col-10 offset-1">
                        <Col className="col-1">
                            <Form.Check aria-label="option 1"></Form.Check>
                        </Col>
                        <Col className="col-1">(이미지)</Col>
                        <Col className="col-1">XX사</Col>
                        <Col className="col-2">주소</Col>
                        <Col className="col-2">날짜</Col>
                        <Col className="col-3">프로그램 이름</Col>
                        <Col className="col-1">인원 수</Col>
                    </Col>
                </Row>
                <Row className="tpl">
                    <Col className="likeslist col-10 offset-1">
                        <Col className="col-1" style={{border: "1px solid red", margin: "0"}}>
                            <Form.Check aria-label="option 1"></Form.Check>
                        </Col>
                        <Col className="col-1">(이미지)</Col>
                        <Col className="col-1">XX사</Col>
                        <Col className="col-2">주소</Col>
                        <Col className="col-2">날짜</Col>
                        <Col className="col-3">프로그램 이름</Col>
                        <Col className="col-1">인원 수</Col>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}