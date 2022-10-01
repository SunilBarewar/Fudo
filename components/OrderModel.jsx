import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { createOrder } from '../lib/orderHandler';
import { useStore } from '../store/store';
import { useRouter } from 'next/router';
import css from '../styles/OrderModel.module.css'
const OrderModel = ({ opened, setOpened, PaymentMethod }) => {
  const theme = useMantineTheme();
  const total = typeof window !== 'undefined' && localStorage.getItem('total')
  const router = useRouter();
  const [FormData, setFormData] = useState({})

  const handleInput = (e) => {
    e.preventDefault();
    setFormData({ ...FormData, [e.target.name]: e.target.value })
  }
  const resetCart = useStore(state => state.resetCart)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({ ...FormData, total, PaymentMethod })
    toast.success('order placed')
    resetCart();
    {
      typeof window !== 'undefined' && localStorage.setItem('order', id);
    }
    router.push(`/order/${id}`)
  }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={() => setOpened(null)}
    >
      {/* Modal content */}
      <form action="" className={css.formContainer}>
        <input onChange={(e) => handleInput(e)} type='text' name='name' required placeholder='Name' />
        <input onChange={(e) => handleInput(e)} type="text" name='phone' required placeholder='Phone number' />
        <textarea onChange={(e) => handleInput(e)} name="address" placeholder='address' rows="3"></textarea>

        <span>You will pay <span style={{ color: 'var(--themeRed)' }}>${total}</span> On Delivery</span>

        <button onClick={(e) => handleSubmit(e)} className='btn'>Place Order </button>
      </form>

    </Modal>
  )
}

export default OrderModel