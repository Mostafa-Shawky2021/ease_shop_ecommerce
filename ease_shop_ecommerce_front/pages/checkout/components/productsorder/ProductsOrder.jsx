import Link from "next/link";

import { useCartsData, useGuest } from "@root/hooks";

import { ListItem } from "@root/components/listitem";

import calcTotalPrice from "utils/calcTotalPrice";

import EditIcon from "@mui/icons-material/Edit";

import style from "./productorder.module.scss";

const ProductsOrder = () => {
	const { guestId } = useGuest();

	const { data: carts } = useCartsData(guestId);

	return (
		<div className={style.productsOrderWrapper}>
			<header className="d-flex justify-content-between">
				<h4 className={style.title}>تفاصيل الاوردر</h4>
				<Link className={style.returntoCarts} href="/carts">
					تعديل السلة
					<EditIcon fontSize="xs" style={{ margin: "0px 5px" }} />
				</Link>
			</header>
			<div className="table-responsive">
				<table className={style.table}>
					<thead className={style.tableHead}>
						<tr>
							<th>اسم المنتج </th>
							<th>الكمية </th>
							<th>السعر الكلي</th>
						</tr>
					</thead>
					<tbody>
						<ListItem
							data={carts}
							renderItem={(cart) => (
								<tr key={cart.id}>
									<td style={{ width: "75%" }}> {cart?.product?.product_name}</td>
									<td>{cart.quantity}</td>
									<td style={{ width: "25%" }}>{Number(cart.total_price).toLocaleString()}</td>
								</tr>
							)}
						/>
						<tr>
							<td style={{ color: "#000" }} colSpan="2">
								المجموع الكلي{" "}
							</td>
							<td style={{ color: "#000", borderRight: "0px" }}>{calcTotalPrice(carts)}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default ProductsOrder;
