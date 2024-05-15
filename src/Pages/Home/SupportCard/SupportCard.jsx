

const SupportCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mx-2 my-20">
            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://i.ibb.co/kKBn22F/delivery.png" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Free Delivery</h3>
                    <p className="text-slate-400">From all orders over $10</p>
                </div>
            </div>


            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://i.ibb.co/mJx7jQC/support.png" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Support 24/7</h3>
                    <p className="text-slate-400">Shop with an expert</p>
                </div>
            </div>


            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://i.ibb.co/4djk2YX/voucher.png" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Gift Voucher</h3>
                    <p className="text-slate-400">Refer a friend</p>
                </div>
            </div>


            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://i.ibb.co/pLqrqJ6/return.png" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Return & Refund</h3>
                    <p className="text-slate-400">Free return over $200</p>
                </div>
            </div>


            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://i.ibb.co/rFqH5V9/secure.png" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Secure Payment</h3>
                    <p className="text-slate-400">100% Protected</p>
                </div>
            </div>
        </div>
    );
};

export default SupportCard;



// https://i.ibb.co/rFqH5V9/secure.png