import React, { useEffect, useState } from 'react'
import classes from './Bag.module.scss'
import Icon from '../../components/UI/Icon'
import Cookies from 'universal-cookie'
import { grandTotal, imageRender } from '../../helper/global'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import * as productAction from '../../redux/product/ProductAction'
import Image from 'next/image'

const cookies = new Cookies()

function Bag(props) {
  let carts = cookies.get('cart')
  const [cartData, setCartData] = useState(null)

  useEffect(() => {
    setCartData(carts)
  }, [])

  const deleteItemFromCart = (index) => {
    let newCart = null
    const cartsCp = cartData
    newCart = cartsCp.filter((item, key) => key !== index)
    setCartData(newCart)
    cookies.set('cart', newCart)
    props.onSetCartData(newCart)

  }

  const confirmationDeleteHandler = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItemFromCart(index)
        Swal.fire('Success Delete', '', 'success')
      }
    })
  }

  let rows = null
  if (cartData && cartData.length > 0) {
    rows = cartData.map((item, key) => {
      return (
        <tr key={key}>
          <td scope="col">
            <div className={classes.Column}>
              <div className={classes.Delete} onClick={() => confirmationDeleteHandler(key)}>
                <Icon name="ico-close" widtd={20} fill="#000000" stroke="none" />
              </div>
            </div>
          </td>
          <td scope="col">
            <Image
              src={imageRender(item?.name, 'src')}
              alt={item?.name}
              width={150}
              height={150}
              />
          </td>
          <td scope="col">
            <div className={classes.DetailProduct}>
              <div>
                <div className={classes.Title}>{item?.name}</div>
                <div className={classes.SizeAndColor}>
                  <div className={classes.Size}>Size: {item?.size}</div>
                  <div className={classes.Color}>
                    <div>Color</div>
                    <div style={{ background: item?.colorHash }} className={classes.ColorBox}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className={classes.Column}>
              ${item?.price}
            </div>
          </td>
          <td>
            <div className={classes.Column}>
              {item?.qty}
            </div>
          </td>
          <td>
            <div className={classes.Column}>
              ${item?.price * item?.qty}
            </div>
          </td>
        </tr>
      )
    })
  } else {
    rows = (
      <tr>
        <td colSpan={6}>Ops, you haven't selected an item</td>
      </tr>
    )
  }

  return (
    <div className={classes.Wrapper}>
      <div className='container'>
        <div className={classes.Heading}>
          <div className={classes.Label}>
            Your Bag
          </div>
          <div className={classes.Icon}>
            {props.cartRedux ? <div className={classes.Badge}>{props.cartRedux.length}</div> : null}
            <Icon name='ico-bag' width={35} stroke="none" />
          </div>
        </div>
        <div className={classes.Table}>
          <table className="table">
            <thead>
              <tr>
                <th style={{width: '5%'}}></th>
                <th style={{width: '20%'}}></th>
                <th style={{width: '40%'}}>product</th>
                <th style={{width: '15%'}}>price</th>
                <th style={{width: '15%'}}>quantity</th>
                <th style={{width: '15%'}}>total</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          <div className='row'>
            <div className='col-md-8'></div>
            <div className='col-md-4'>
              <div className={classes.Total}>
                <div>total</div>
                <div>${grandTotal(cartData)}</div>
              </div>
              <div className={classes.Button} onClick={() => router.push('/bag')}>
                <div className={classes.Label}>
                  pay now
                </div>
                <div className={classes.Icon}>
                  <Icon name="ico-arrow-ligth-long" width={20} fill="#FFFFFF" stroke="none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    cartRedux: state.ProductReducer.carts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCartData: (data) => dispatch(productAction.setCartsData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bag)
