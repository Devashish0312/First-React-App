import React, { Component } from 'react';
import { Col, Row, Card, CardPanel, CardTitle ,Tag} from 'react-materialize';

class Content extends Component {
    render() {
        return (
            <div className="container">
                <Row>
	<Col s={1} className='grid-example'>1</Col>
	<Col s={1} className='grid-example'>2</Col>
	<Col s={1} className='grid-example'>3</Col>
	<Col s={1} className='grid-example'>4</Col>
	<Col s={1} className='grid-example'>5</Col>
	<Col s={1} className='grid-example'>6</Col>
	<Col s={1} className='grid-example'>7</Col>
	<Col s={1} className='grid-example'>8</Col>
	<Col s={1} className='grid-example'>9</Col>
	<Col s={1} className='grid-example'>10</Col>
	<Col s={1} className='grid-example'>11</Col>
	<Col s={1} className='grid-example'>12</Col>
</Row>
                <Row>
                    <Card header={<CardTitle reveal image={"https://scontent.fmaa1-1.fna.fbcdn.net/v/t31.0-8/20232751_1313515475410573_2242841448815756319_o.jpg?oh=1fc95b6500f2a2806a7c613966887868&oe=5A052C3B"} waves='light' />}
                        title="Chester Bannington"
                        reveal={<p>Bennington died of suicide by hanging at his home in Palos Verdes Estates, California; his housekeeper discovered his body around 9:00 a.m. PDT on July 20, 2017.[48][49] Mike Shinoda confirmed his death on Twitter, writing, "Shocked and heartbroken, but it's true. An official statement will come out as soon as we have one".[50] On July 21, Brian Elias, the chief of operations for the office of the medical examiner-coroner, confirmed that a half-full bottle of alcohol was found at the scene, but no other drugs were present.[51] The band announced that they had canceled the North American leg of their One More Light Tour following Bennington's death and that tickets will be refunded.[52]
                                    Bennington's death occurred on what would have been Chris Cornell's 53rd birthday.[53] Cornell, who was a close friend of Bennington, had also died of suicide by hanging two months prior.[53] Shinoda noted that Bennington was very emotional when the band performed "One More Light" in his honor, where he could not finish singing the song, be it in rehearsal or in a live performance setting.[54][55] Bennington sang Leonard Cohen's song "Hallelujah" at Cornell's funeral.[53] He was also the godfather of Cornell's son Christopher.[</p>}>
                        <p><a href="https://en.wikipedia.org/wiki/Chester_Bennington">About him</a></p>
                    </Card>
                </Row>
                <hr />
                <br />
                <Row>
                    <Col s={4} m={4} l={4}>
                        <Card
                            header={<CardTitle image='https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mike_Shinoda_World_Expo_2008.jpg/1200px-Mike_Shinoda_World_Expo_2008.jpg'></CardTitle>}>
                            <a href="https://en.wikipedia.org/wiki/Mike_Shinoda" >Mike Shinoda</a>
                        </Card>

                    </Col>
                    <Col s={8} m={8} l={8}>
                        "One week. Feels like forever. Brad, Joe, Rob, Dave, and I love you all very much. Thank you for respecting our privacy during this extremely difficult time."
                                        <br />
                        <br />
                        "Shocked and heartbroken, but it's true"<br/>
                                                <Tag>#RIPChestorBannington</Tag>
                        <Tag>#bestfriend</Tag>
                        <Tag>#greatperson</Tag>
                    </Col>
                </Row>

                <Row>
                    <Col s={4} m={4} l={4}>
                        <Card
                            header={<CardTitle image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3nYS5BjPrQ5k1s5Xws_d2pJ8CW5Y_MOCU-j-Y7zAA55v9RflcyrPxko'></CardTitle>}>
                            <a href="https://en.wikipedia.org/wiki/Mike_Shinoda" >NickelBack</a>
                        </Card>

                    </Col>
                    <Col s={8} m={8} l={8}>
                    <br/>
                    <br/>
                        "When life leaves us blind, love keeps us kind." <br/>- Chester Bennington.<br/> Rest easy sir.<br/>
                                                <Tag>#RIPChestorBannington</Tag>
                        <Tag>#Respect</Tag>
                        <Tag>#Legend</Tag>
                    </Col>
                </Row>

                <Row>
                    <Col s={4} m={4} l={4}>
                        <Card
                            header={<CardTitle image='https://pbs.twimg.com/profile_images/831544203230461953/duRZ_YIT.jpg'></CardTitle>}>
                            <a href="https://en.wikipedia.org/wiki/one_republic" >One Republic</a>
                        </Card>

                    </Col>
                    <Col s={8} m={8} l={8}>
                        <br />
                        <br />
                        "Oh dear God. Massive R.I.P to Chester Bennington of @linkinpark this BREAKS OUR HEART.
                        <br /> Suicide is the devil on earth walking amongst us 😞"<br/>
                        <Tag>#RIPChestorBannington</Tag>
                        <Tag>#StopSuicide</Tag>
                        <Tag>#Legend</Tag>


                    </Col>
                </Row>


                <Row>
                    <Col s={4} m={4} l={4}>
                        <Card
                            header={<CardTitle image='https://yt3.ggpht.com/-lIauTqVpm7c/AAAAAAAAAAI/AAAAAAAAAAA/4Cq1U_gDtO8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'></CardTitle>}>
                            <a href="https://en.wikipedia.org/wiki/one_republic" >Justin Timberlake</a>
                        </Card>

                    </Col>
                    <Col s={8} m={8} l={8}>
                        <br />
                        <br />
                        "RIP to Chester Bennington and my sincerest condolences to his family, friends, and the Linkin Park family. Truly unique, humble frontman."
                        <br/>
                                                <Tag>#RIPChestorBannington</Tag>
                    </Col>
                </Row>

                                <Row>
                    <Col s={4} m={4} l={4}>
                        <Card
                            header={<CardTitle image='data:image/jpeg;base64,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'></CardTitle>}>
                            <a href="https://en.wikipedia.org/wiki/one_republic" >Imagine Dragons</a>
                        </Card>

                    </Col>
                    <Col s={8} m={8} l={8}>
                        <br />
                        <br />
                        "no words. so heartbroken. RIP Chester Bennington."
                                        <br/>
                                                                <Tag>#RIPChestorBannington</Tag>
                        <Tag>#StopSuicide</Tag>
                        <Tag>#Legend</Tag>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Content;