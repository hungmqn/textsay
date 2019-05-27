// module.exports = (req, _res, next) => {
//   const authorization = req.header('authorization').toLowerCase().replace('bearer', '').trim()
//   const { id } = utilService.verifyAuthToken(authorization, configService.getSecret());
  
//   req.auth = {
//     id
//   }
//   next()
// }