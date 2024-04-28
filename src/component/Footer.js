import React from 'react'
import {company} from '../utils/footerData'
import {contacts} from '../utils/footerData'
import {deviver} from '../utils/footerData'
import {legal} from '../utils/footerData'
import {country_list} from '../utils/footerData'
import logo from '../Images/logo.jpg';

export default function Footer() {
  return (
    <div className='footer-container container-fluid'>
        <div className='container py-3 '>
            <div className='row justify-content-evenly'>
                <div className='col-lg-3 col-sm-12'>
                    <div className='d-flex justify-content-center my-2 me-0'>
                    <a href='#' className='footer-logo rounded-circle'>
                        <img className='footer-logo rounded-circle' src={logo}></img>
                    </a>
                    <h3 className=' align-self-center' style={{color:"rgba(0,0,0,0.8)", fontFamily:"fantasy"}}>Food Bazaar</h3>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-4 justify-content-center'>
                    <div className='d-flex justify-content-center mx-auto w-50'>
                        <ul className='list-unstyled w-50'>
                            <li className='footer-heading font-weight-bolder mb-1 text-dark'>Company
                            </li>
                                {company.map((detail,index)=><li key={index} className='footer-heading-content'>{detail}
                            </li>)}
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-4 justify-content-center'>
                    <div className='d-flex justify-content-center mx-auto w-50 flex-column'>
                        <ul className='list-unstyled w-50 mx-auto'>
                            <li className='footer-heading font-weight-bolder mb-1 text-dark'> Contects
                        </li>
                            {contacts.map((contacts,index)=><li key={index} className='footer-heading-content'>{contacts}
                        </li>)}
                        </ul>
                        <ul className='list-unstyled mt-4 w-50 mx-auto'>
                            <li className='footer-heading font-weight-bolder mb-1 text-dark'>  Legal
                        </li>
                            {legal.map((legal,index)=><li key={index} className='footer-heading-content'>{legal}
                        </li>)}
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3 col-sm-4 justify-content-center'>
                    <div className='d-flex justify-content-center mx-auto w-50 flex-column'>
                        <ul className='list-unstyled w-50 mx-auto'>
                            <li className='footer-heading font-weight-bolder mb-1 text-dark'>Diliver
                            </li>
                                {deviver.map((option,index)=><li key={index} className='footer-heading-content'>{option}
                            </li>)}
                        </ul>
                        <select className='custom-select w-75 mx-auto' defaultValue="India">
                            {country_list.map((c_list, index)=><option key={index}>{c_list} </option>)}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

//{"data":{"cards:[{"card":{"card":{"gridElements":{"infoWithStyle":{"restaurants":{"info":{}}}}}}}]"}}
// path: data.cards[2].card.card.gridElements.infoWithStyle.restaurants.info
