const connection = async() => {
    
    //handling promise with async and await
    const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/test');
    if(isConnected){
        console.log("connection success")
    } else {
        console.log("connection failed")
        
    }
}
connection()