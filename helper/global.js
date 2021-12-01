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