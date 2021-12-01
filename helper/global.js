import { shoes } from "../content/shoes"

export const imageRender = (name, type) => {
  let result = ''

  shoes.forEach(item => {
    if (name === item?.name && type === 'src') {
      result = item?.image
    } else if (name === item?.name && type === 'alt') {
      result = item?.name
    }
  });

  return result
}

export const convertNameToBeSlug = (name) => {
  let slug = name.split(' ').join('-')
  return slug.toLowerCase()
}

export const grandTotal = (data) => {
  if (data) {
    let result = 0
    data.forEach(element => {
      result += (element.price * element.qty)
    })
    
    return result
  }
}