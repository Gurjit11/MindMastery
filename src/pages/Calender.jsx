import React from 'react'
import '../hero.css'



const Calender = () => {
    var num;
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dates = new Date();
    let name = month[dates.getMonth()];
    let year = dates.getFullYear();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let day = weekday[dates.getDay()];

    num = dates.getDate();
    return (
        <div class="container">
            <div class="calendar">
                <div class="front">
                    <div class="current-date">
                        <h1>{day} {num}</h1>
                        <h1> {name} {year}</h1>
                    </div>

                    <div class="current-month">
                        <ul class="week-days">
                            <li>MON</li>
                            <li>TUE</li>
                            <li>WED</li>
                            <li>THU</li>
                            <li>FRI</li>
                            <li>SAT</li>
                            <li>SUN</li>
                        </ul>

                        <div class="weeks">
                            <div class="first">
                                <span class={num == 29 ? 'active' : ''}> 29 </span>
                                <span  class={num == 28 ? 'active' : ''}> 28 </span>
                                <span  class={num == 1 ? 'active' : ''}>01</span>
                                <span  class={num == 2 ? 'active' : ''}>02</span>
                               
                                <span id='1' class={num == 3 ? 'active' : ''}>03</span>
                                <span class={num == 4? 'active' : ''} >04</span>
                                <span class={num == 5 ? 'active' : ''}>05</span>
                            </div>

                            <div class="second">
                                <span class={num == 6 ? 'active' : ''}>06</span>
                                <span class={num == 7 ? 'active' : ''}>07</span>
                                <span class={num == 8 ? 'active' : ''}>08</span>
                                <span class={num == 9 ? 'active' : ''}>09</span>
                                <span class={num == 10? 'active' : ''}>10</span>
                                <span class={num == 11 ? 'active' : ''}>11</span>
                                <span class={num == 12 ? 'active' : ''}>12</span>
                            </div>

                            <div class="third">
                                <span class={num == 13 ? 'active' : ''}>13</span>
                                <span class={num == 14 ? 'active' : ''}>14</span>
                                <span class={num == 15 ? 'active' : ''}>15</span>
                                <span class={num == 16 ? 'active' : ''}>16</span>
                                <span class={num == 17 ? 'active' : ''}>17</span>
                                <span class={num == 18 ? 'active' : ''}>18</span>
                                <span class={num == 19 ? 'active' : ''}>19</span>
                            </div>

                            <div class="fourth">
                                <span class={num == 20 ? 'active' : ''}>20</span>
                                <span class={num == 21 ? 'active' : ''}>21</span>
                                <span class={num == 22 ? 'active' : ''}>22</span>
                                <span class={num == 23 ? 'active' : ''}>23</span>
                                <span class={num == 24 ? 'active' : ''}>24</span>
                                <span class={num == 25 ? 'active' : ''}>25</span>
                                <span class={num == 26 ? 'active' : ''}>26</span>
                            </div>

                            <div class="fifth">
                                <span class={num == 27 ? 'active' : ''}>27</span>
                                <span class={num == 28 ? 'active' : ''}>28</span>
                                <span class={num == 29 ? 'active' : ''}>29</span>
                                <span class={num == 30 ? 'active' : ''}>30</span>
                                <span class={num == 31 ? 'active' : ''}>31</span>
                                <span class={num == -1 ? 'active' : ''}></span>
                                <span class={num == -1 ? 'active' : ''}></span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>

    )
}

export default Calender