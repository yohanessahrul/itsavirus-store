export const updateObject = (oldObject, updatedProperties) => {
  // console.log('OLD', oldObject);
  // console.log('NEW', updatedProperties);
  return {
    ...oldObject,
    ...updatedProperties
  }
}