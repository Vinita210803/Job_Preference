const Razorpay = require('razorpay'); 

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZOR_PAY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

// const renderProductPage = async(req,res)=>{

//     try {
        
//         res.render('product');

//     } catch (error) {
//         console.log(error.message);
//     }

// }

const createOrder = async(req,res)=>{
    try {
        const amount = 30*100
        const options = {
            amount: amount,
            currency: 'INR',
            receipt: 'razorUser@gmail.com'
        }

        razorpayInstance.orders.create(options, 
            (err, order)=>{
                if(!err){
                    res.status(200).send({
                        success:true,
                        msg:'Order Created',
                        order_id:order.id,
                        amount:amount,
                        key_id: process.env.RAZORPAY_SECRET_KEY,
                        product_name:"Newbie",
                        description:"team to code",
                        contact:"8567345632",
                        name: "Sandeep Sharma",
                        email: "sandeep@gmail.com"
                    });
                }
                else{
                    console.log(err)
                    res.status(400).send({success:false,msg:'Something went wrong!'});
                }
            }
        );

    } catch (error) {
        console.log(error.message);
    }
}

const checkout=async(req,res)=>{
    const options={
      amount:Number(req.body.amount*100),
      currency:"INR"
    }
    const order=await razorpayInstance.orders.create(options);
    res.status(200).json({
        success:true,
        order,
    })
}

const paymentVerification =async (req,res)=>{
    console.log(req.body);
    res.status(200).json({
        success:true
    })
}


module.exports = {
   paymentVerification,
    checkout
}