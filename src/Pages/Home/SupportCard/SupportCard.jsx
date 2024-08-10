

const SupportCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mx-2 my-20">
            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723221100/delivery_j4qk2y.svg" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Free Delivery</h3>
                    <p className="text-slate-400">From all orders over $10</p>
                </div>
            </div>


            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723221216/support_zx2mdt.svg" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Support 24/7</h3>
                    <p className="text-slate-400">Shop with an expert</p>
                </div>
            </div>


            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723224390/voucher_chkizq.png" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Gift Voucher</h3>
                    <p className="text-slate-400">Refer a friend</p>
                </div>
            </div>


            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723234699/return_a0n0tp.png" alt="" />
                </div>
                <div>
                    <h3 className="text-lg text-[#425a8b] font-semibold">Return & Refund</h3>
                    <p className="text-slate-400">Free return over $200</p>
                </div>
            </div>


            <div className="border rounded-lg hover:border-slate-400 hover:bg-blue-50 flex gap-5 py-5 px-2">
                <div>
                    <img src="https://res.cloudinary.com/drdgi9qdu/image/upload/v1723234763/secure_zzwfac.png" alt="" />
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