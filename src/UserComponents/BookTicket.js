import "./bookticket.css"
import React from 'react'
import { Link } from 'react-router-dom'

function BookTicket() {
    return (
        <>
            <Link to={"/usermovielist"} className='btn btn-outline-primary' style={{ position: "absolute", top: "20px", left: "10px" }}>Go Back</Link>

            <div class="form-container" className="ticket-booking"  >
                <form className="ceat-pick mt-4">
                    <div style={{textAlign : "center"}}>
                    <h1 className="title mb-3">Pick Your Ceats</h1>
                    <span className="sub-title ">One Ticket Cost : 300</span>
                    <br />
                    <div className="inputForm mt-3">
                        <input type="number" placeholder="Enter Number Of Ceats" className="ml-3"/>
                        <input type="time" placeholder="Show Time" className="ml-3"/>
                        </div>
                    </div>

                    <div style={{marginLeft:"100px"}}>
                        <center>
                            <p id="notification"></p>
                            <table id="seatsBlock" >

                                <tr>
                                    <td colspan="14"><div class="screen" style={{
                                        width:"100%",
                                        height: '30px',
                                        background: '#ff4b2b',
                                        color: '#fff',
                                        textAlign:"center",
                                        
                                        fontSize: '15px'
                                    }}>SCREEN</div></td>
                                    <td rowspan="20">
                                        <div class="smallBox greenBox" style={{ width: 'max-content',marginLeft:"20px" }}> Selected Seat</div> <br />
                                        <div class="smallBox redBox" style={{ width: 'max-content',marginLeft:"20px" }}> Reserved Seat</div><br />
                                        <div class="smallBox emptyBox" style={{ width: 'max-content',marginLeft:"20px" }}> Empty Seat</div><br />
                                    </td>

                                    <br />
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td></td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>A</td>
                                    <td><input type="checkbox" class="seats" value="A1" id="A1" /></td>
                                    <td><input type="checkbox" class="seats" value="A2" id="A2" /></td>
                                    <td><input type="checkbox" class="seats" value="A3" id="A3" /></td>
                                    <td><input type="checkbox" class="seats" value="A4" id="A4" /></td>
                                    <td><input type="checkbox" class="seats" value="A5" /></td>
                                    <td class="seatGap"></td>
                                    <td><input type="checkbox" class="seats" value="A6" /></td>
                                    <td><input type="checkbox" class="seats" value="A7" /></td>
                                    <td><input type="checkbox" class="seats" value="A8" /></td>
                                    <td><input type="checkbox" class="seats" value="A9" /></td>
                                    <td><input type="checkbox" class="seats" value="A10" /></td>
                                    <td><input type="checkbox" class="seats" value="A11" /></td>
                                    <td><input type="checkbox" class="seats" value="A12" /></td>
                                </tr>
                                <tr>
                                    <td>B</td>
                                    <td><input type="checkbox" class="seats" value="B1" /></td>
                                    <td><input type="checkbox" class="seats" value="B2" /></td>
                                    <td><input type="checkbox" class="seats" value="B3" /></td>
                                    <td><input type="checkbox" class="seats" value="B4" /></td>
                                    <td><input type="checkbox" class="seats" value="B5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="B6" /></td>
                                    <td><input type="checkbox" class="seats" value="B7" /></td>
                                    <td><input type="checkbox" class="seats" value="B8" /></td>
                                    <td><input type="checkbox" class="seats" value="B9" /></td>
                                    <td><input type="checkbox" class="seats" value="B10" /></td>
                                    <td><input type="checkbox" class="seats" value="B11" /></td>
                                    <td><input type="checkbox" class="seats" value="B12" /></td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td><input type="checkbox" class="seats" value="C1" /></td>
                                    <td><input type="checkbox" class="seats" value="C2" /></td>
                                    <td><input type="checkbox" class="seats" value="C3" /></td>
                                    <td><input type="checkbox" class="seats" value="C4" /></td>
                                    <td><input type="checkbox" class="seats" value="C5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="C6" /></td>
                                    <td><input type="checkbox" class="seats" value="C7" /></td>
                                    <td><input type="checkbox" class="seats" value="C8" /></td>
                                    <td><input type="checkbox" class="seats" value="C9" /></td>
                                    <td><input type="checkbox" class="seats" value="C10" /></td>
                                    <td><input type="checkbox" class="seats" value="C11" /></td>
                                    <td><input type="checkbox" class="seats" value="C12" /></td>
                                </tr>
                                <tr>
                                    <td>D</td>
                                    <td><input type="checkbox" class="seats" value="D1" /></td>
                                    <td><input type="checkbox" class="seats" value="D2" /></td>
                                    <td><input type="checkbox" class="seats" value="D3" /></td>
                                    <td><input type="checkbox" class="seats" value="D4" /></td>
                                    <td><input type="checkbox" class="seats" value="D5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="D6" /></td>
                                    <td><input type="checkbox" class="seats" value="D7" /></td>
                                    <td><input type="checkbox" class="seats" value="D8" /></td>
                                    <td><input type="checkbox" class="seats" value="D9" /></td>
                                    <td><input type="checkbox" class="seats" value="D10" /></td>
                                    <td><input type="checkbox" class="seats" value="D11" /></td>
                                    <td><input type="checkbox" class="seats" value="D12" /></td>
                                </tr>
                                <tr>
                                    <td>E</td>
                                    <td><input type="checkbox" class="seats" value="E1" /></td>
                                    <td><input type="checkbox" class="seats" value="E2" /></td>
                                    <td><input type="checkbox" class="seats" value="E3" /></td>
                                    <td><input type="checkbox" class="seats" value="E4" /></td>
                                    <td><input type="checkbox" class="seats" value="E5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="E6" /></td>
                                    <td><input type="checkbox" class="seats" value="E7" /></td>
                                    <td><input type="checkbox" class="seats" value="E8" /></td>
                                    <td><input type="checkbox" class="seats" value="E9" /></td>
                                    <td><input type="checkbox" class="seats" value="E10" /></td>
                                    <td><input type="checkbox" class="seats" value="E11" /></td>
                                    <td><input type="checkbox" class="seats" value="E12" /></td>
                                </tr>
                                <tr class="seatVGap"></tr>
                                <tr>
                                    <td>F</td>
                                    <td><input type="checkbox" class="seats" value="F1" /></td>
                                    <td><input type="checkbox" class="seats" value="F2" /></td>
                                    <td><input type="checkbox" class="seats" value="F3" /></td>
                                    <td><input type="checkbox" class="seats" value="F4" /></td>
                                    <td><input type="checkbox" class="seats" value="F5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="F6" /></td>
                                    <td><input type="checkbox" class="seats" value="F7" /></td>
                                    <td><input type="checkbox" class="seats" value="F8" /></td>
                                    <td><input type="checkbox" class="seats" value="F9" /></td>
                                    <td><input type="checkbox" class="seats" value="F10" /></td>
                                    <td><input type="checkbox" class="seats" value="F11" /></td>
                                    <td><input type="checkbox" class="seats" value="F12" /></td>
                                </tr>
                                <tr>
                                    <td>G</td>
                                    <td><input type="checkbox" class="seats" value="G1" /></td>
                                    <td><input type="checkbox" class="seats" value="G2" /></td>
                                    <td><input type="checkbox" class="seats" value="G3" /></td>
                                    <td><input type="checkbox" class="seats" value="G4" /></td>
                                    <td><input type="checkbox" class="seats" value="G5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="G6" /></td>
                                    <td><input type="checkbox" class="seats" value="G7" /></td>
                                    <td><input type="checkbox" class="seats" value="G8" /></td>
                                    <td><input type="checkbox" class="seats" value="G9" /></td>
                                    <td><input type="checkbox" class="seats" value="G10" /></td>
                                    <td><input type="checkbox" class="seats" value="G11" /></td>
                                    <td><input type="checkbox" class="seats" value="G12" /></td>
                                </tr>

                                <tr>
                                    <td>H</td>
                                    <td><input type="checkbox" class="seats" value="H1" /></td>
                                    <td><input type="checkbox" class="seats" value="H2" /></td>
                                    <td><input type="checkbox" class="seats" value="H3" /></td>
                                    <td><input type="checkbox" class="seats" value="H4" /></td>
                                    <td><input type="checkbox" class="seats" value="H5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="H6" /></td>
                                    <td><input type="checkbox" class="seats" value="H7" /></td>
                                    <td><input type="checkbox" class="seats" value="H8" /></td>
                                    <td><input type="checkbox" class="seats" value="H9" /></td>
                                    <td><input type="checkbox" class="seats" value="H10" /></td>
                                    <td><input type="checkbox" class="seats" value="H11" /></td>
                                    <td><input type="checkbox" class="seats" value="H12" /></td>
                                </tr>

                                <tr>
                                    <td>I</td>
                                    <td><input type="checkbox" class="seats" value="I1" /></td>
                                    <td><input type="checkbox" class="seats" value="I2" /></td>
                                    <td><input type="checkbox" class="seats" value="I3" /></td>
                                    <td><input type="checkbox" class="seats" value="I4" /></td>
                                    <td><input type="checkbox" class="seats" value="I5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="I6" /></td>
                                    <td><input type="checkbox" class="seats" value="I7" /></td>
                                    <td><input type="checkbox" class="seats" value="I8" /></td>
                                    <td><input type="checkbox" class="seats" value="I9" /></td>
                                    <td><input type="checkbox" class="seats" value="I10" /></td>
                                    <td><input type="checkbox" class="seats" value="I11" /></td>
                                    <td><input type="checkbox" class="seats" value="I12" /></td>
                                </tr>

                                <tr>
                                    <td>J</td>
                                    <td><input type="checkbox" class="seats" value="J1" /></td>
                                    <td><input type="checkbox" class="seats" value="J2" /></td>
                                    <td><input type="checkbox" class="seats" value="J3" /></td>
                                    <td><input type="checkbox" class="seats" value="J4" /></td>
                                    <td><input type="checkbox" class="seats" value="J5" /></td>
                                    <td></td>
                                    <td><input type="checkbox" class="seats" value="J6" /></td>
                                    <td><input type="checkbox" class="seats" value="J7" /></td>
                                    <td><input type="checkbox" class="seats" value="J8" /></td>
                                    <td><input type="checkbox" class="seats" value="J9" /></td>
                                    <td><input type="checkbox" class="seats" value="J10" /></td>
                                    <td><input type="checkbox" class="seats" value="J11" /></td>
                                    <td><input type="checkbox" class="seats" value="J12" /></td>
                                </tr>
                            </table>
                            <br /><input onClick={() => alert("Tickets booked successfully")} type="button" value="Confirm Selection" className="btn btn-danger" id="con-select" />
                        </center>
                    </div>
                    <br /><br />
                    <div class="displayerBoxes">
                        <center>
                            <table class="Displaytable" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                <tr>
                                   
                                    <th>Number of Seats</th>
                                    <th>Time</th>
                                </tr>
                                <tr>
                                    
                                    <td><textarea></textarea></td>
                                    <td><textarea ></textarea></td>
                                </tr>
                            </table>
                        </center>

                    </div>
                </form>

                <br />
                <button  onClick={() => alert("payment succesful")} className="btn btn-danger mb-3" style={{ marginLeft: "50%" }}>Pay Now</button>
            </div>
        </>
    )
}

export default BookTicket