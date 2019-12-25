import React , {useState} from "react";
import { Link } from 'react-router-dom';
import facebook-like from '../images/facebook-like.png'
//import {Container} from 

export const ChooseActionPage = () => {
    let page;
    let user = "nadav";
    let points = -1

    page =<div>
    <p>Hello {user}, you have {points}</p>
    <table>
        <tr>
            <td></td>
        </tr>


    </table>


    </div>

    return page;
}