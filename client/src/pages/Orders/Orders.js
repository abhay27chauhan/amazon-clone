import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from '../../firebase';
import { useStateValue } from '../../Hooks/stateProvider';
import Order from '../../components/Order/Order';

function Orders() {
    const[{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        let isMounted = true
        if(user && isMounted){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }else{
            setOrders([])
        }
        return () => { isMounted = false };
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {orders?.map(order => {
                   return <Order order={order}/>
                })}
            </div>
        </div>
    )
}

export default Orders;
