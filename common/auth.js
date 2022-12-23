const bcrypt = require('bcryptjs')
const SALT=10;
const jwt=require('jsonwebtoken');
const { token } = require('morgan');
const secret='IKKHJNKdgbdb0541545120'

const hashPassword=async(password)=>{
    let salt=await bcrypt.genSalt(SALT)
    let hash=await bcrypt.hash(password,salt)
    return hash
}
const hashCompare=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}

const createToken=async(payload)=>{
    let token=await jwt.sign(payload,secret,{expiresIn:'1m'})
    return token
}

const decodeToken=async(token)=>{
    let data=await jwt.decode(token)
    console.log(data)
}
module.exports={hashPassword,hashCompare,createToken,decodeToken}