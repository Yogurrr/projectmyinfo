import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import {Table} from "react-bootstrap";
import {bookinfo} from "./utils/bookinfo";

export default function Myinfo () {
    return (
        <main>
            <Container fluid>
                <Row className="lnm2">
                    <Col className="likesmenu2 col-6"><Link href='/likes'>좋아요</Link></Col>
                    <Col className="bar2 col-1">|</Col>
                    <Col className="infomenu2 col-5">예약정보</Col>
                </Row>
                <Row className="msg">
                    <Col className="offset-1">예약정보</Col>
                </Row>
                <Row className="bkinfo">
                    <Col className="col-10 offset-1">
                        {bookinfo.map(({name, phone, tname, pname, category, period, pplnum, price}, index) => {
                            return (
                                <Table striped="columns" bordered className="bkdtb">
                                <tbody key={index} value={[name, phone, tname, pname, category, period, pplnum, price]}>
                            <tr>
                                <th>예약자 이름</th>
                                <td>{name}</td>
                                <th>예약자 전화번호</th>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <th>절</th>
                                <td>{tname}</td>
                                <th>프로그램 이름</th>
                                <td>{pname}</td>
                            </tr>
                            <tr>
                                <th>분류</th>
                                <td>{category}</td>
                                <th>기간</th>
                                <td>{period}</td>
                            </tr>
                            <tr>
                                <th>인원</th>
                                <td>{pplnum}</td>
                                <th>가격</th>
                                <td>{price}</td>
                            </tr>
                            </tbody>
                                </Table>
                                    )
                        })}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}