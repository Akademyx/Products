var express = require('express')
var app = express();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');
app.use(express.static(__dirname + '/public/dist'));
// configure body-parser to read JSON
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
var dbURI = 'mongodb://localhost/belt'
mongoose.connect(dbURI);
var count = 3;
var ProductSchema = new mongoose.Schema({
    idNum:{type: Number, auto:true},
    name: { type: String, minlength: [3, 'Must be at least 3 characters long']},
    quantity: {type: Number, min: [0, 'Quantity must be minimum of 0']},
    price: {type: Number, min: [0, 'Price must be minimum of 0']}
})


var Product = mongoose.model('Product', ProductSchema);


app.post('/commerce', (req, res) => {
    var newProduct = new Product(req.body);
    console.log(newProduct)
  newProduct['idNum'] = count
    newProduct.save((err) => {
        if (err) {
            res.json(err)
        } else {
            count++
            res.json(newProduct)
        }
    })
})

app.get('/commerce', (req, res) => {
    Product.find({}, (err, foundProduct) => {
        if (err) {
            res.json(err)
        } else {
            res.json(foundProduct);
        }
    })
})
app.get('/commerce/:id', (req, res) => {
    console.log("We're in get")
    Product.findOne({ idNum: req.params.id }, (err, foundProduct) => {
        if (err) {
            res.json(err)
        } else {
            res.json(foundProduct);
        }
    })
})

app.put('/commerce/:id', (req, res) => {
    Product.findOne({ idNum: req.params.id }, (err, foundProduct) => {
        if (err) {
            res.json(err)
        } else {
            foundProduct.name = req.body.name;
            foundProduct.quantity = req.body.quantity;
            foundProduct.price = req.body.price;
            foundProduct.save((err) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(foundProduct);
                }
            })
        }
    })
})

app.delete('/commerce/:id', (req, res) => {
    Product.remove({ idNum: req.params.id }, (err) => {
        res.json({ message: 'Product Deleted' })
    })
})
// app.get('/transactions/:')
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});


app.listen(8000, () => {
    console.log("listening on port 8000");
});
