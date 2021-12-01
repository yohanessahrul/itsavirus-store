import React from 'react'
import classes from './Bag.module.scss'
import Icon from '../../components/UI/Icon'
import { shoes } from '../../content/shoes'

export default function Bag() {
  return (
    <div className={classes.Wrapper}>
      <div className='container'>
        <div className={classes.Heading}>
          <div className={classes.Label}>
            Your Bag
          </div>
          <div className={classes.Icon}>
            <div className={classes.Badge}>2</div>
            <Icon name='ico-bag' width={35} stroke="none" />
          </div>
        </div>
        <div className={classes.Table}>
          <table className="table">
            <thead>
              <tr>
                <th style={{width: '5%'}}></th>
                <th style={{width: '5%'}}></th>
                <th style={{width: '40%'}}>product</th>
                <th style={{width: '15%'}}>price</th>
                <th style={{width: '15%'}}>quantity</th>
                <th style={{width: '15%'}}>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">
                  <div className={classes.Column}>
                    <Icon name="ico-close" widtd={20} fill="#000000" stroke="none" />
                  </div>
                </td>
                <td scope="col"><img src={shoes[0].image} alt="" /></td>
                <td scope="col">
                  <div className={classes.DetailProduct}>
                    <div>
                      <div className={classes.Title}>nike air jordan</div>
                      <div className={classes.SizeAndColor}>
                        <div className={classes.Size}>Size: 8</div>
                        <div className={classes.Color}>
                          <div>Color</div>
                          <div style={{ background: 'green' }} className={classes.ColorBox}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={classes.Column}>
                    $67.99
                  </div>
                </td>
                <td>
                  <div className={classes.Column}>
                    1
                  </div>
                </td>
                <td>
                  <div className={classes.Column}>
                    $67.98
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="col">
                  <div className={classes.Column}>
                    <Icon name="ico-close" widtd={20} fill="#000000" stroke="none" />
                  </div>
                </td>
                <td scope="col"><img src={shoes[0].image} alt="" /></td>
                <td scope="col">
                  <div className={classes.DetailProduct}>
                    <div>
                      <div className={classes.Title}>nike air jordan</div>
                      <div className={classes.SizeAndColor}>
                        <div className={classes.Size}>Size: 8</div>
                        <div className={classes.Color}>
                          <div>Color</div>
                          <div style={{ background: 'cyan' }} className={classes.ColorBox}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={classes.Column}>
                    $67.99
                  </div>
                </td>
                <td>
                  <div className={classes.Column}>
                    1
                  </div>
                </td>
                <td>
                  <div className={classes.Column}>
                    $67.98
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='row'>
            <div className='col-md-8'></div>
            <div className='col-md-4'>
              <div className={classes.Total}>
                <div>total</div>
                <div>$67.89</div>
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
