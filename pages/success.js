import Layout from "../components/Layout"
import OrderModel from "../components/OrderModel"

const success = () => {
  return (
    <Layout>
        <OrderModel opened={true} PaymentMethod={1} />
    </Layout>
  )
}

export default success