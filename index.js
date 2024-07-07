// const express = require("express");
// const dotEnv = require('dotenv');
// const mongoose = require('mongoose');
// const vendorRoutes = require('./routes/vendorRoutes');
// const bodyParser = require('body-parser');
// const firmRoutes = require('./routes/firmRoutes');
// const productRoutes = require('./routes/productRoutes');
// const cors = require('cors');
// const path = require('path')





// // const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/vendor/all-vendors', createProxyMiddleware({
//   target: 'https://backend-nodejs-suby.onrender.com',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/vendor/all-vendors': '/vendor/all-vendors', // Keep the path the same
//   },
// }));

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });














// // const app = express()

// // const PORT = process.env.PORT || 4000;

// dotEnv.config();
// app.use(cors())

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("MongoDB connected successfully!"))
//     .catch((error) => console.log(error))

// app.use(bodyParser.json());
// app.use('/vendor', vendorRoutes);
// app.use('/firm', firmRoutes)
// app.use('/product', productRoutes);
// app.use('/uploads', express.static('uploads'));

// // app.listen(PORT, () => {
// //     console.log(`server started and running at ${PORT}`);
// // });

// app.use('/', (req, res) => {
//     res.send("<h1> Welcome to SUBY");
// })

const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path')

const app = express()

const PORT = process.env.PORT || 4000;

dotEnv.config();
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((error) => console.log(error))

app.use(bodyParser.json());
app.use('/vendor', vendorRoutes);
app.use('/firm', firmRoutes)
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`server started and running at ${PORT}`);
});

app.use('/', (req, res) => {
    res.send("<h1> Welcome to SUBY");
})