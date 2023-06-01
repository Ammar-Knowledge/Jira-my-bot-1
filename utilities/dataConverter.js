/**
 * base64 To String converter
 * @param {string} data
 */
module.exports.base64ToString = (data) => {
  try {
    let buff = Buffer.alloc(data, 'base64')
    return buff.toString()
      } catch (error) 
  {
    return error
  }
}
