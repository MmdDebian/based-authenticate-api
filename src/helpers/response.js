// response runction for sending response to client 

function response({res , message , data={} , status=200}){
    res.status(status).json({
        message ,
        data ,
    })
}

module.exports = {
    response
}