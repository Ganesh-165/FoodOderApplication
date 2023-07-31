import React, { useEffect, useState } from "react";
import OderCard from '../admincomponents/OderCard';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAuth from "../hooks/useAuth";

const Url = "/oder";

const ViewOders = () => {
  const [oders, setOders] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const {auth} = useAuth();

  useEffect(() => {
    const getOders = async () => {
      const response = await axiosPrivate.post(Url,{email: auth.email});
      setOders(() => response.data.response);
    };
    getOders();
  }, []);

  return (
    <section className="lg:ml-80 ml-20 max-w-2xl mr-4 flex flex-col gap-2 p-4 rounded">
      {oders.length > 0 ? (
        <div className="flex flex-col bg-white rounded-3xl p-2">
          {oders.map((oder) => (
            <OderCard
              key={oder.id}
              id={oder.id}
              email={oder.email}
              noofitems={oder.noofitems}
              totalamount={oder.totalAmount}
              delevered={oder.delevered}
              date={oder.createdAt}
            />
          ))}
        </div>
      ) : (
        <h1 className="font-bold text-2xl">No Oders Odered</h1>
      )}
    </section>
  );
};

export default ViewOders;
