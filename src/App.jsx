import { useEffect } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer, removeFromBasket } from './redux/slices/basketSlice'
import './css/Product.css'
import { color } from '@mui/system'

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeFromBasket({ id }));
    dispatch(calculateBasket());
  };

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer())} anchor='right' open={drawer} >
        {
           products && products.length > 0 ? (
            products.map((product) => (
            <div key={product.id}>
             <div className='flex-row' style={{ padding: '20px' }}>
          <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} alt={product.title} />
          <p style={{ width: '320px', marginRight: '5px' }}>{product.title} ({product.count})</p>
          <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price} TL</p>
          <button onClick={() => handleRemove(product.id)} className='delete-button'>sil</button>
        </div>
      </div>
    ))
  ) : (
    <div style={{  width: '480px', marginRight: '5px', padding: '18px', textAlign: 'center' }}>
      <p>Sepetiniz boş</p>
    </div>
  )
}

          <div>
            <hr></hr>
            <p style={{ textAlign: 'center' }}>Toplam Tutar: {totalAmount} TL</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
