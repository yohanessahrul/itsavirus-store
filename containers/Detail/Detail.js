import React, { useEffect, useState } from 'react'
import classes from './Detail.module.scss'
import { useRouter } from 'next/router'
import Icon from '../../components/UI/Icon'
import Image from '../../components/Product/Detail/Image/Image'
import Size from '../../components/Product/Detail/Size/Size'
import Color from '../../components/Product/Detail/Color/Color'
import VideoPlayer from '../../components/Product/Detail/VideoPlayer/VideoPlayer'
import * as productAction from '../../redux/product/ProductAction'
import { connect } from 'react-redux'
import ContentLoader from 'react-content-loader'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Detail(props) {
  const router = useRouter()
  const slug = router.query.slug
  const [activeSize, setActiveSize] = useState(null)
  const [activeColor, setActiveColor] = useState(null)
  const [activeHashColor, setActiveHashColor] = useState(null)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    props.onInitProducts()
  }, [])

  useEffect(() => {
    if (props.products && slug) {
      props.onInitProductDetail(slug)
    }
  }, [props.products, slug])

  useEffect(() => {
    if (props.productDetail) {
      setActiveColor(props.productDetail?.colors[0]?.name)
      setActiveHashColor(props.productDetail?.colors[0]?.color_hash)
      setActiveSize(props.productDetail?.sizes[0])
    }
  }, [props.productDetail])

  const setColorHandler = (name, hash) => {
    setActiveColor(name)
    setActiveHashColor(hash)
  }

  const addToCart = (item) => {
    let carts = cookies.get('cart')
    let payload = {
      name: item?.name,
      price: item?.price,
      size: activeSize,
      colorHash: activeHashColor,
      colorName: activeColor,
      qty: 1,
    }

    if (!carts) {
      carts = []
      carts.push(payload)
      // cookies.set('cart', carts)
    } else {
      carts.push(payload)
    }

    cookies.set('cart', carts)
    props.onSetCartData(carts)

    Swal.fire('Saved!', '', 'success')
    router.push('/')
  }

  const nextStepHandler = (item) => {
    Swal.fire({
      title: 'Continue Payment?',
      showDenyButton: true,
      // showCancelButton: true,
      // cancelButtonText: 'test',
      confirmButtonText: 'Yes, Please',
      denyButtonText: `Not yet`,
    }).then((result) => {
      if (result.isConfirmed) {
        addToCart(item)
        router.push('/bag')
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Add to cart?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: 'No',
        }).then((res) => {
          if (res.isConfirmed) {
            addToCart(item)
          } else if (res.isDenied) {

          }
        })
      }
    })

  }

  let image = null
  let details = null
  let videoPlayer = null
  let size = null
  let color = null
  if (props.productDetail) {
    image = <Image name={props.productDetail?.name} />
    details = (
      <React.Fragment>
        <div className={classes.Category}>{props?.productDetail?.category}</div>
        <div className={classes.Title}>{props?.productDetail?.name}</div>
        <div className={classes.Description}>{props?.productDetail?.description}</div>
      </React.Fragment>
    )
    videoPlayer = <VideoPlayer url={props.productDetail?.video} />
    size = (
      <Size
        sizes={props.productDetail?.sizes}
        activeSize={activeSize}
        clickedToSetActiveSize={(val) => setActiveSize(val)}/>
    )
    color = (
      <Color
        colors={props.productDetail?.colors}
        activeColor={activeHashColor}
        clickedToSetActiveColor={(name, hash) => setColorHandler(name, hash)} />
    )
  } else {
    details = (
      <ContentLoader
        speed={0}
        width="100%"
        height={200}
        viewBox="0 0 100% 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="20" rx="0" ry="0" width="90" height="16" />
        <rect x="0" y="55" rx="0" ry="0" width="300" height="50" />
        <rect x="0" y="131" rx="0" ry="0" width="450" height="18" />
        <rect x="0" y="163" rx="0" ry="0" width="300" height="18" />
      </ContentLoader>
    )
    videoPlayer = (
      <ContentLoader
        speed={0}
        width={700}
        height={60}
        viewBox="0 0 700 60"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="28" ry="28" width="56" height="56" />
        <rect x="80" y="17" rx="0" ry="0" width="100" height="20" />
      </ContentLoader>
    )
    size = (
      <ContentLoader
        speed={0}
        width={700}
        height={220}
        viewBox="0 0 700 220"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="20" rx="0" ry="0" width="150" height="18" />
        <rect x="0" y="70" rx="0" ry="0" width="48" height="48" />
        <rect x="65" y="70" rx="0" ry="0" width="48" height="48" />
        <rect x="130" y="70" rx="0" ry="0" width="48" height="48" />
        <rect x="195" y="70" rx="0" ry="0" width="48" height="48" />
        <rect x="0" y="134" rx="0" ry="0" width="48" height="48" />
        <rect x="65" y="134" rx="0" ry="0" width="48" height="48" />
        <rect x="130" y="134" rx="0" ry="0" width="48" height="48" />
        <rect x="195" y="134" rx="0" ry="0" width="48" height="48" />
      </ContentLoader>
    )
    
  }

  return (
    <div className={classes.Wrapper}>
      <div className='container'>
        <div className={classes.Row}>
          <div className={classes.Left}>
            <Image name={props.productDetail?.name} />
          </div>
          <div className={classes.Right}>
            {details}
            {videoPlayer}
            {size}
            {color}
          </div>
        </div>
        <div className={classes.BtnGroup}>
          <div className='row'>
            <div className='col-md-9'>
              <div className={classes.FreeShippingNotes}>
                <div className={classes.Icon}></div>
                <Icon name="ico-free-delivery" width={18} fill="#000000" stroke="none" />
                free shipping over $100 purchase
              </div>
            </div>
            <div className='col-md-3 d-grid gap-2'>
              <div className={classes.Button} onClick={() => nextStepHandler(props.productDetail)}>
                <div className={classes.Label}>
                  add to bag - $95.97
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
    products: state.ProductReducer.products,
    productDetail: state.ProductReducer.productDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitProducts: () => dispatch(productAction.initProducts()),
    onInitProductDetail: (slug) => dispatch(productAction.initProductDetail(slug)),
    onSetCartData: (data) => dispatch(productAction.setCartsData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
