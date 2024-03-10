const itemRoutes = require('./controllers/itemRoutes.js');
const orderRoutes = require('./controllers/orderRoutes.js');

app.use(express.static('public'));
app.use('/api/items', itemRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
